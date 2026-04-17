import React from 'react';
import { useParams } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { BookingService } from '../services/BookingService';

export const SeatMap = ({ wagonsData }) => {
  const { trainId } = useParams();
  const { selectedWagon, selectedSeats, toggleSeat } = useBooking();
  const seats = wagonsData[selectedWagon] || [];

  const allBookings = BookingService.getBookings();

  const bookedSeatsIds = allBookings
    .filter(b => b.trainId === parseInt(trainId) && b.wagonNumber === selectedWagon + 1)
    .flatMap(b => b.seats);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <h3 className="text-lg font-bold mb-4 text-slate-800">Схема вагона №{selectedWagon + 1}</h3>
      
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-3">
        {seats.map((seat) => {
          const isSelected = selectedSeats.includes(seat.id);
          
          const isBooked = bookedSeatsIds.includes(seat.id) || seat.status === 'booked';

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
