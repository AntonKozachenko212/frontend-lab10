import React from 'react';
import { useBooking } from '../context/BookingContext';

export const SeatMap = ({ wagonsData }) => {
  const { selectedWagon, selectedSeats, toggleSeat } = useBooking();
  const seats = wagonsData[selectedWagon] || [];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Схема вагона №{selectedWagon + 1}</h3>
      
      {/* Сітка місць */}
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-3">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat.id);
          const isBooked = seat.status === 'booked';

          return (
            <button
              key={seat.id}
              disabled={isBooked}
              onClick={() => toggleSeat(seat.id)}
              className={`
                h-10 w-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all
                ${isBooked ? 'bg-red-100 text-red-400 cursor-not-allowed' : 
                  isSelected ? 'bg-blue-600 text-white shadow-lg scale-110' : 
                  'bg-green-100 text-green-700 hover:bg-green-200'}
              `}
            >
              {seat.id}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex gap-4 text-xs font-medium text-slate-500">
        <div className="flex items-center gap-1"><span className="w-3 h-3 bg-green-100 rounded"></span> Вільні</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-600 rounded"></span> Обрані</div>
        <div className="flex items-center gap-1"><span className="w-3 h-3 bg-red-100 rounded"></span> Заброньовано</div>
      </div>
    </div>
  );
};
