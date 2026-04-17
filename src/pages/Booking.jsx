import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { trains } from '../data/trains';
import { SeatMap } from '../components/SeatMap';
import { BookingForm } from '../components/BookingForm';
import { BookingProvider } from '../context/BookingContext';

export const Booking = () => {
  const { trainId } = useParams();
  const train = trains.find(t => t.id === parseInt(trainId));

  if (!train) return <div className="text-center py-20">Потяг не знайдено</div>;

  return (
    <BookingProvider>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Link to="/" className="text-blue-600 hover:underline mb-6 inline-block">← Назад до списку</Link>
        
        <header className="mb-8">
          <h1 className="text-3xl font-black text-slate-900">Бронювання: {train.from} — {train.to}</h1>
          <p className="text-slate-500">Потяг №{train.number} | Відправлення: {new Date(train.departure).toLocaleString('uk-UA')}</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <SeatMap wagonsData={train.wagons} />
          </div>
          <div className="lg:col-span-1">
            <BookingForm />
          </div>
        </div>
      </div>
    </BookingProvider>
  );
};
