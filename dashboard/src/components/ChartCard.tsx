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
import { createChartOptions, formatTimestamp } from '../utils/chartUtils';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ChartCardProps {
  title: string;
  data: DataPoint[];
  dataKey: keyof DataPoint;
  color: string;
}

export const ChartCard: React.FC<ChartCardProps> = ({ title, data, dataKey, color }) => {
  const chartData = {
    labels: data.map(d => formatTimestamp(d.timestamp)),
    datasets: [
      {
        label: title,
        data: data.map(d => d[dataKey]),
        borderColor: color,
        backgroundColor: color + '20',
        fill: true,
        tension: 0.4,
        pointRadius: 3,
        pointHoverRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="h-[300px]">
        <Line data={chartData} options={createChartOptions(title)} />
      </div>
    </div>
  );
};