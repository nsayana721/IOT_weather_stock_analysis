import React, { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { CorrelationDashboard } from './components/CorrelationDashboard';

function App() {
  const [showCorrelation, setShowCorrelation] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-end space-x-4">
            <button
              onClick={() => setShowCorrelation(false)}
              className={`px-4 py-2 rounded-md transition-colors ${
                !showCorrelation
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Time Series
            </button>
            <button
              onClick={() => setShowCorrelation(true)}
              className={`px-4 py-2 rounded-md transition-colors ${
                showCorrelation
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Correlation Analysis
            </button>
          </div>
        </div>
      </div>
      {showCorrelation ? <CorrelationDashboard /> : <Dashboard />}
    </div>
  );
}

export default App;