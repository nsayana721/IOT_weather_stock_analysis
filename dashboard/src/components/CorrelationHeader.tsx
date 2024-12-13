import React from 'react';
import { LineChart } from 'lucide-react';

export const CorrelationHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-3">
        <LineChart className="w-8 h-8 text-purple-600" />
        <h1 className="text-2xl font-bold text-gray-800">Market Correlation Analysis</h1>
      </div>
    </div>
  );
};