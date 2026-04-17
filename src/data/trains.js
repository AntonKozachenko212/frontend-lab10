const init_seats = (number_of_wagons, seats_per_wagon) => {
  let result = [];
  for (let i = 0; i < number_of_wagons; i++) {
    result.push([]);
    for (let j = 0; j < seats_per_wagon; j++) {
      result[i].push({ id: j + 1, status: 'free' }); 
    }
  }
  return result;
};

export const trains = [
  {
    id: 1,
    number: "072L",
    from: "Львів",
    to: "Запоріжжя",
    departure: "2026-05-10T18:30:00",
    duration: "6h 20m",
    wagons: init_seats(5, 20)
  },
  {
    id: 2,
    number: "105K",
    from: "Одеса",
    to: "Київ",
    departure: "2026-05-11T21:00:00",
    duration: "9h 00m",
    wagons: init_seats(7, 30)
  },
  {
    id: 3,
    number: "045L",
    from: "Чоп",
    to: "Рання Зоря",
    departure: "2026-05-12T12:15:00",
    duration: "22h 45m",
    wagons: init_seats(10, 40)
  }
];
