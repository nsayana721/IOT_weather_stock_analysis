import React from 'react';
import { DashboardHeader } from './DashboardHeader';
import { ChartSection } from './ChartSection';
import { marketData } from '../data/marketData';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <DashboardHeader />
        <ChartSection data={marketData} />
      </div>
    </div>
  );
};