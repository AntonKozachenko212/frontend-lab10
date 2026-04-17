import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { BookingService } from '../services/BookingService';
import { toast } from 'react-toastify';

export const BookingForm = () => {
  const { trainId } = useParams();
  const { selectedWagon, selectedSeats, setSelectedSeats } = useBooking();
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedSeats.length === 0) {
      toast.error("Будь ласка, виберіть хоча б одне місце!");
      return;
    }

    const bookingData = {
      trainId: parseInt(trainId),
      wagonNumber: selectedWagon + 1,
      seats: selectedSeats,
      passenger: formData
    };

    BookingService.saveBooking(bookingData);
    
    toast.success("Квитки успішно заброньовано!");
    
    setSelectedSeats([]);
    setFormData({ name: '', phone: '', email: '' });
    e.target.reset(); 
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
      <h3 className="text-lg font-bold text-slate-800">Дані пасажира</h3>
      
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Прізвище та ім'я</label>
        <input 
          required 
          type="text" 
          className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Телефон</label>
          <input 
            required 
            type="tel" 
            placeholder="+380..."
            className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
          <input 
            required 
            type="email" 
            className="w-full px-4 py-2 rounded-xl border border-slate-200 outline-none focus:border-blue-500"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>

      <div className="pt-4">
        <p className="text-sm text-slate-500 mb-2">
          Обрано місць: <span className="font-bold text-slate-900">{selectedSeats.length}</span>
        </p>
        <button 
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-blue-200"
        >
          Підтвердити бронювання
        </button>
      </div>
    </form>
  );
};
