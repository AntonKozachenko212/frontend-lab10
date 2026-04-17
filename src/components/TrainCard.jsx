import React from 'react';
import { Link } from 'react-router-dom';

export const TrainCard = ({ train }) => {
  const departureDate = new Date(train.departure).toLocaleString('uk-UA', {
    day: '2-digit', month: 'long', hour: '2-digit', minute: '2-digit'
  });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      
      <div className="flex justify-between items-center border-b border-slate-100 pb-4 mb-4">
        <h3 className="text-xl font-bold text-slate-800">
          Потяг <span className="text-blue-600">#{train.number}</span>
        </h3>
        <span className="bg-blue-50 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
          ⏱ {train.duration}
        </span>
      </div>
      
      <div className="flex flex-col gap-3 mb-6 flex-grow text-slate-600">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Звідки</span>
          <span className="font-semibold text-slate-800">{train.from}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Куди</span>
          <span className="font-semibold text-slate-800">{train.to}</span>
        </div>

        <div className="mt-2 p-3 bg-slate-50 rounded-xl">
          <p className="text-sm text-slate-500 mb-1">Відправлення</p>
          <p className="font-semibold text-slate-900">{departureDate}</p>
        </div>
      </div>
      <Link 
        to={`/booking/${train.id}`} 
        className="w-full block text-center bg-slate-900 hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/30"
      >
        Вибрати місця
      </Link>
    </div>
  );
};
