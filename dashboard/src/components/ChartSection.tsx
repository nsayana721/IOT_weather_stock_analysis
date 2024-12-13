import React from 'react';
import { ChartCard } from './ChartCard';
import { DataPoint } from '../types/data';

interface ChartSectionProps {
  data: DataPoint[];
}

export const ChartSection: React.FC<ChartSectionProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Environmental Metrics */}
      <ChartCard
        title="Temperature (°C)"
        data={data}
        dataKey="temp"
        color="#FF6B6B"
      />
      <ChartCard
        title="Humidity (%)"
        data={data}
        dataKey="humidity"
        color="#4ECDC4"
      />

      {/* Stock Prices */}
      <ChartCard
        title="SSE Open Price"
        data={data}
        dataKey="sseOpen"
        color="#45B7D1"
      />
      <ChartCard
        title="AV Open Price"
        data={data}
        dataKey="avOpenPrice"
        color="#96CEB4"
      />
      <ChartCard
        title="TSCO Open Price"
        data={data}
        dataKey="tscoOpenPrice"
        color="#D4A5A5"
      />

      {/* Trading Volumes */}
      <ChartCard
        title="SSE Volume"
        data={data}
        dataKey="sseVolume"
        color="#9B59B6"
      />
      <ChartCard
        title="AV Volume"
        data={data}
        dataKey="avVolume"
        color="#3498DB"
      />
      <ChartCard
        title="TSCO Volume"
        data={data}
        dataKey="tscoVolume"
        color="#E67E22"
      />
    </div>
  );
};