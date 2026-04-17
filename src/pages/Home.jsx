// src/pages/Home.jsx
import React, { useState } from 'react';
import { TrainList } from '../components/TrainList';
import { trains } from '../data/trains';

export const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTrains = trains.filter((train) => {
    const query = searchQuery.toLowerCase();
    return (
      train.number.toLowerCase().includes(query) ||
      train.from.toLowerCase().includes(query) ||
      train.to.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">
          Пошук рейсів <span className="text-blue-600">Укрзалізниці</span>
        </h1>
        
        <div className="w-full max-w-2xl mb-12">
          <input 
            type="text" 
            placeholder="Введіть місто або номер потяга..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 shadow-sm text-lg outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
          />
        </div>

        <TrainList trains={filteredTrains} />
      </div>
    </div>
  );
};
