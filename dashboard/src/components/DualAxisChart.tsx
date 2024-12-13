import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { DataPoint } from '../types/data';
import { formatTimestamp } from '../utils/chartUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface DualAxisChartProps {
  title: string;
  data: DataPoint[];
  primaryKey: keyof DataPoint;
  secondaryKey: keyof DataPoint;
  primaryLabel: string;
  secondaryLabel: string;
  primaryColor: string;
  secondaryColor: string;
}

export const DualAxisChart: React.FC<DualAxisChartProps> = ({
  title,
  data,
  primaryKey,
  secondaryKey,
  primaryLabel,
  secondaryLabel,
  primaryColor,
  secondaryColor,
}) => {
  const chartData = {
    labels: data.map(d => formatTimestamp(d.timestamp)),
    datasets: [
      {
        label: primaryLabel,
        data: data.map(d => d[primaryKey]),
        borderColor: primaryColor,
        backgroundColor: primaryColor + '20',
        yAxisID: 'y',
        tension: 0.4,
      },
      {
        label: secondaryLabel,
        data: data.map(d => d[secondaryKey]),
        borderColor: secondaryColor,
        backgroundColor: secondaryColor + '20',
        yAxisID: 'y1',
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: title,
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        type: 'linear' as const,
        display: true,
        position: 'left' as const,
        title: {
          display: true,
          text: primaryLabel,
        },
      },
      y1: {
        type: 'linear' as const,
        display: true,
        position: 'right' as const,
        title: {
          display: true,
          text: secondaryLabel,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="h-[300px]">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};