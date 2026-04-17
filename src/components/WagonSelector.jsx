import React from 'react';
import { useBooking } from '../context/BookingContext';

export const WagonSelector = ({ wagonsCount }) => {
  const { selectedWagon, setSelectedWagon, setSelectedSeats } = useBooking();

  const handleWagonChange = (index) => {
    setSelectedWagon(index);
    setSelectedSeats([]); 
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 mb-6">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Виберіть вагон</h3>
      
      {/* Контейнер для кнопок вагонів */}
      <div className="flex flex-wrap gap-3">
        {Array.from({ length: wagonsCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleWagonChange(index)}
            className={`
              px-5 py-2.5 rounded-xl font-medium transition-all duration-200
              ${selectedWagon === index 
                ? 'bg-slate-900 text-white shadow-md scale-105' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}
            `}
          >
            Вагон {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};
