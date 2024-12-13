import { format } from 'date-fns';

export const formatTimestamp = (timestamp: string) => {
  return format(new Date(timestamp), 'MMM dd HH:mm');
};

export const createChartOptions = (title: string) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        font: { size: 13 },
        padding: 15,
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    title: {
      display: true,
      text: title,
      font: {
        size: 16,
        weight: 'bold',
      },
      padding: { bottom: 15 }
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      titleFont: { size: 14 },
      bodyFont: { size: 13 },
      padding: 12,
      displayColors: true,
      callbacks: {
        label: (context: any) => {
          const label = context.dataset.label;
          const value = context.parsed.y.toLocaleString();
          return `${label}: ${value}`;
        }
      }
    }
  },
  scales: {
    x: {
      ticks: {
        maxRotation: 45,
        minRotation: 45,
        font: { size: 11 },
        color: '#666'
      },
      grid: {
        display: false
      }
    },
    y: {
      beginAtZero: false,
      ticks: {
        font: { size: 12 },
        color: '#666',
        callback: (value: number) => value.toLocaleString()
      },
      grid: {
        color: '#f0f0f0'
      }
    }
  }
});