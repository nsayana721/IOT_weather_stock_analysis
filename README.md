# IOT Weather and Stock Analysis Project

## **Overview**
This project investigates the relationship between weather conditions and the performance of selected volatile stocks. By leveraging IoT principles, the project collects real-time weather data and stock prices, performs data analysis, and builds predictive models to explore correlations between weather metrics and stock market trends. A visualization dashboard and predictive activator enhance the usability and insights gained from the analysis.

---

## **Objective**
The primary objective is to analyze how weather conditions influence:
1. **Volatile Stocks**:
   - **SSE** (Renewable Energy): Weather affects energy production and demand.
   - **Tesco** (Retail): Weather impacts consumer behavior and retail sales.
   - **Aviva** (Insurance): Weather-related events lead to claims, influencing stock performance.
2. Create actionable insights for stakeholders in these industries by developing a real-time dashboard and predictive models.

---

## **Key Features**
### 1. **Data Collection**
- Weather data collected from **OpenWeather API**.
- Stock data collected from **Yahoo Finance API**.
- Data stored in **Google Firestore** and processed in **Google BigQuery** for scalability and dynamic querying.

### 2. **Data Visualization**
- **Time Series Graphs**:
  - Temperature, Humidity, and Stock Prices.
  - Overlayed visualizations to observe correlations.
- **Dashboard**:
  - Built using **React** for interactive exploration of trends.
  - Includes scatter plots, correlation heatmaps, and regression analyses.

### 3. **Data Analysis**
- **Correlation Analysis**:
  - Explores relationships between weather metrics and stock prices.
  - **Key Findings**:
    - SSE: Strong correlation with temperature and humidity.
    - Aviva: High negative correlation with humidity.
    - Tesco: Minimal influence from weather data.
- **Regression Modeling**:
  - Predictive equations for SSE and Aviva with moderate accuracy (R² = 50–60%).

### 4. **Predictive Alerts**
- An **email activator** alerts users about predicted stock trends based on weather forecasts.

---

## **Tech Stack**
### **Languages and Libraries**
- Python: Data collection, preprocessing, and modeling.
- JavaScript (React): Dashboard development.
- SQL: BigQuery data processing.

### **Tools and Platforms**
- **Google Cloud Platform (GCP)**:
  - Firestore for NoSQL data storage.
  - BigQuery for structured data processing.
- **APIs**:
  - OpenWeather API for weather data.
  - Yahoo Finance API for stock data.

---

## **Project Workflow**
1. **Data Collection**:
   - Hourly automated API calls using Python schedulers.
   - Data stored in Firestore with retry mechanisms for failed calls.
2. **Preprocessing**:
   - Extensive data cleaning in Google BigQuery and Python.
   - Alignment of timestamps to match weather and stock data intervals.
3. **Visualization**:
   - Dashboards built with React for interactive exploration.
   - Correlation graphs, scatter plots, and heatmaps.
4. **Analysis**:
   - Regression models to determine weather’s impact on stock prices.
   - Correlation heatmaps to identify significant weather metrics.
5. **Prediction and Alerts**:
   - Email-based notifications for stakeholders about predicted stock movements.

---

## **Results and Insights**
### Key Findings:
1. **SSE (Renewable Energy)**:
   - Strong correlation with temperature and moderate correlation with humidity.
   - Predictive modeling achieved an R² = 0.512.
2. **Aviva (Insurance)**:
   - High negative correlation with humidity.
   - Predictive modeling achieved an R² = 0.674.
3. **Tesco (Retail)**:
   - Minimal correlation with weather metrics, indicating low dependence.

### Limitations:
- Short data collection period (one week).
- Limited features from free APIs (e.g., lack of solar irradiance data).
- Small dataset affecting the accuracy of advanced predictive models.


