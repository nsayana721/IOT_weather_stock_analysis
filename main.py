import requests
import yfinance as yf
from google.cloud import firestore
from datetime import datetime
import pytz
import smtplib
from email.mime.text import MIMEText

# Initialize Firestore client
db = firestore.Client()

# API Keys and configuration
WEATHER_API_KEY = "bdf5165bbe8af7189ee55bfec680bfee"
WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
LONDON_LAT = "51.5074"
LONDON_LON = "-0.1278"

# Stock symbols for Yahoo Finance (using .L suffix for LSE)
STOCKS = {
    "SSE": "SSE.L",
    "TESCO": "TSCO.L",
    "AVIVA": "AV.L"
}

def fetch_weather_data():
    params = {
        "lat": LONDON_LAT,
        "lon": LONDON_LON,
        "appid": WEATHER_API_KEY,
        "units": "metric"
    }
    
    response = requests.get(WEATHER_URL, params=params)
    if response.status_code == 200:
        return response.json()
    return None

def fetch_stock_data(symbol, company_name):
    try:
        # Create Ticker object
        stock = yf.Ticker(symbol)
        
        # Get today's data with 60m intervals
        hist = stock.history(period="1d", interval="5m")
        
        if hist.empty:
            print(f"No data available for {company_name}")
            return None
            
        # Get the latest data point
        latest_data = hist.iloc[-2]
        
        # Format the data
        stock_data = {
            "timestamp": datetime.now(pytz.timezone('Europe/London')).strftime("%Y-%m-%d %H:%M:%S"),
            "company": company_name,
            "symbol": symbol,
            "price_data": {
                "open": float(latest_data['Open']),
                "high": float(latest_data['High']),
                "low": float(latest_data['Low']),
                "close": float(latest_data['Close']),
                "volume": int(latest_data['Volume'])
            },
            "additional_info": {
                "currency": "GBP",
                "exchange": "LSE"
            }
        }
        
        return stock_data
        
    except Exception as e:
        print(f"Error fetching data for {company_name}: {e}")
        return None

def save_to_firestore(collection_name, data):
    try:
        timestamp = datetime.now().strftime("%Y%m%d_%H%M")
        doc_ref = db.collection(collection_name).document(timestamp)
        doc_ref.set(data)
        print(f"Successfully saved {collection_name} data")
    except Exception as e:
        print(f"Error saving to Firestore: {e}")

# Activator part
# Email configuration

SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 465
EMAIL_ADDRESS = "weatherstockanalysis@gmail.com"
EMAIL_PASSWORD = "Weather@1"

def predict_stock_price(weights, intercept, temp, humidity, feels_like, wind_speed):
    # Calculate the predicted stock price
    return intercept + (weights['temp'] * temp) + (weights['humidity'] * humidity) + \
           (weights['feels_like'] * feels_like) + (weights['wind_speed'] * wind_speed)

def send_email(subject, body):
    try:
        msg = MIMEText(body)
        msg['Subject'] = subject
        msg['From'] = EMAIL_ADDRESS
        msg['To'] = "asishsayana@gmail.com"

        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
            server.starttls()
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.sendmail(EMAIL_ADDRESS, "asishsayana@gmail.com", msg.as_string())
            print("Email sent successfully")

    except Exception as e:
        print(f"Error sending email: {e}")

def main(request):
    results = {
        "weather": False,
        "stocks": {},
        "errors": []
    }
    
    # Collect and save weather data
    weather_data = fetch_weather_data()
    if weather_data:
        save_to_firestore('weather_data', weather_data)
        results["weather"] = True

        # Extract weather values for prediction
        temp = weather_data['main']['temp']
        humidity = weather_data['main']['humidity']
        feels_like = weather_data['main']['feels_like']
        wind_speed = weather_data['wind']['speed']

        # Predict stock prices
        sse_prediction = predict_stock_price({'temp': -11.7703, 'humidity': -1.2335, 'feels_like': 15.4747, 'wind_speed': 11.2805},
                                             1753.7881, temp, humidity, feels_like, wind_speed)
        aviva_prediction = predict_stock_price({'temp': -1.2567, 'humidity': -0.6049, 'feels_like': 1.3758, 'wind_speed': 1.2524},
                                               526.9541, temp, humidity, feels_like, wind_speed)

        # Compose email body
        email_body = f"""
        Weather Data:
        Temperature: {temp}°C
        Humidity: {humidity}%
        Feels Like: {feels_like}°C
        Wind Speed: {wind_speed} m/s

        Stock Predictions:
        SSE Predicted Open Price: {sse_prediction}
        Aviva Predicted Open Price: {aviva_prediction}
        """

        # Send email
        send_email("Weather and Stock Predictions", email_body)

    else:
        results["errors"].append("Weather data fetch failed")
    
    # Collect and save stock data
    for company_name, symbol in STOCKS.items():
        stock_data = fetch_stock_data(symbol, company_name)
        if stock_data:
            save_to_firestore(f'{company_name.lower()}_stock_data', stock_data)
            results["stocks"][company_name] = True
        else:
            results["errors"].append(f"Stock data fetch failed for {company_name}")
    
    return results


