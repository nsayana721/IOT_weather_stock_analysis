import React from 'react';
import { LayoutGrid, TrendingUp } from 'lucide-react';

export const DashboardHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <TrendingUp className="w-8 h-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-800">Market Analytics Dashboard</h1>
      </div>
      <div className="flex items-center gap-2">
        <LayoutGrid className="w-5 h-5 text-gray-600" />
        <span className="text-gray-600">Grid View</span>
      </div>
    </div>
  );
};