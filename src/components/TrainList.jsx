import React from 'react';
import { TrainCard } from './TrainCard';

export const TrainList = ({ trains }) => {
  if (!trains || trains.length === 0) {
    return (
      <div className="w-full text-center py-12 text-slate-500 text-lg">
        Рейсів за вашим запитом не знайдено. 😕
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};
