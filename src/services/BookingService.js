export const BookingService = {
  getBookings: () => {
    const data = localStorage.getItem('railway_bookings');
    return data ? JSON.parse(data) : [];
  },

  saveBooking: (bookingData) => {
    const existingBookings = BookingService.getBookings();
    
    const newBooking = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...bookingData
    };
    
    existingBookings.push(newBooking);
    
    localStorage.setItem('railway_bookings', JSON.stringify(existingBookings));
    
    return newBooking;
  }
};
