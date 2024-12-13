import React from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { DataPoint } from '../types/data';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

interface CorrelationChartProps {
  title: string;
  data: DataPoint[];
  xKey: keyof DataPoint;
  yKey: keyof DataPoint;
  xLabel: string;
  yLabel: string;
  color: string;
}

export const CorrelationChart: React.FC<CorrelationChartProps> = ({
  title,
  data,
  xKey,
  yKey,
  xLabel,
  yLabel,
  color,
}) => {
  const chartData = {
    datasets: [
      {
        label: title,
        data: data.map((point) => ({
          x: point[xKey],
          y: point[yKey],
        })),
        backgroundColor: color,
        pointRadius: 6,
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${xLabel}: ${context.parsed.x}, ${yLabel}: ${context.parsed.y}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: xLabel,
        },
      },
      y: {
        title: {
          display: true,
          text: yLabel,
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="h-[300px]">
        <Scatter data={chartData} options={options} />
      </div>
    </div>
  );
};