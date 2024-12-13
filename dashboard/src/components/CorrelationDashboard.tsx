import React from 'react';
import { CorrelationHeader } from './CorrelationHeader';
import { CorrelationChartSection } from './CorrelationChartSection';
import { marketData } from '../data/marketData';

export const CorrelationDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <CorrelationHeader />
        <CorrelationChartSection data={marketData} />
      </div>
    </div>
  );
};