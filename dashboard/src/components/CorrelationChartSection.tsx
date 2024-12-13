import React from 'react';
import { DualAxisChart } from './DualAxisChart';
import { DataPoint } from '../types/data';

interface CorrelationChartSectionProps {
  data: DataPoint[];
}

export const CorrelationChartSection: React.FC<CorrelationChartSectionProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      <h2 className="text-xl font-semibold text-gray-700">Temperature vs Stock Prices</h2>
      <DualAxisChart
        title="Temperature vs SSE Open Price"
        data={data}
        primaryKey="temp"
        secondaryKey="sseOpen"
        primaryLabel="Temperature (°C)"
        secondaryLabel="SSE Open Price"
        primaryColor="#FF6B6B"
        secondaryColor="#4ECDC4"
      />
      <DualAxisChart
        title="Temperature vs AV Open Price"
        data={data}
        primaryKey="temp"
        secondaryKey="avOpenPrice"
        primaryLabel="Temperature (°C)"
        secondaryLabel="AV Open Price"
        primaryColor="#FF6B6B"
        secondaryColor="#45B7D1"
      />
      <DualAxisChart
        title="Temperature vs TSCO Open Price"
        data={data}
        primaryKey="temp"
        secondaryKey="tscoOpenPrice"
        primaryLabel="Temperature (°C)"
        secondaryLabel="TSCO Open Price"
        primaryColor="#FF6B6B"
        secondaryColor="#96CEB4"
      />

      <h2 className="text-xl font-semibold text-gray-700 mt-6">Humidity vs Stock Prices</h2>
      <DualAxisChart
        title="Humidity vs SSE Open Price"
        data={data}
        primaryKey="humidity"
        secondaryKey="sseOpen"
        primaryLabel="Humidity (%)"
        secondaryLabel="SSE Open Price"
        primaryColor="#9B59B6"
        secondaryColor="#4ECDC4"
      />
      <DualAxisChart
        title="Humidity vs AV Open Price"
        data={data}
        primaryKey="humidity"
        secondaryKey="avOpenPrice"
        primaryLabel="Humidity (%)"
        secondaryLabel="AV Open Price"
        primaryColor="#9B59B6"
        secondaryColor="#45B7D1"
      />
      <DualAxisChart
        title="Humidity vs TSCO Open Price"
        data={data}
        primaryKey="humidity"
        secondaryKey="tscoOpenPrice"
        primaryLabel="Humidity (%)"
        secondaryLabel="TSCO Open Price"
        primaryColor="#9B59B6"
        secondaryColor="#96CEB4"
      />
    </div>
  );
};