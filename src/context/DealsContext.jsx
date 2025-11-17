import React, { createContext, useContext, useMemo, useState } from 'react';
import { slotsMock } from '../data/slotsMock';
import { bookingsMock } from '../data/bookingsMock';

const DealsContext = createContext();

const userLocation = {
  label: 'Downtown',
  lat: 37.7749,
  lng: -122.4194,
};

const withMeta = (slot) => ({
  ...slot,
  start: new Date(slot.startTime),
  end: new Date(slot.endTime),
});

export const DealsProvider = ({ children }) => {
  const [slots, setSlots] = useState(slotsMock.map(withMeta));
  const [bookings, setBookings] = useState(bookingsMock);

  const filterSlots = (filters = {}) => {
    const { category, day, distance } = filters;
    const now = new Date();
    return slots.filter((slot) => {
      const slotDayDiff = (slot.start - now) / (1000 * 60 * 60 * 24);
      const matchesCategory = category ? slot.category === category : true;
      const matchesDay = (() => {
        if (day === 'today') return slot.start.toDateString() === now.toDateString();
        if (day === 'week') return slotDayDiff <= 7 && slotDayDiff >= 0;
        return true;
      })();
      const matchesDistance = (() => {
        if (!distance || distance === 'all') return true;
        const numericDistance = parseFloat(slot.location.distance);
        if (Number.isNaN(numericDistance)) return true;
        if (distance === '1') return numericDistance <= 1;
        if (distance === '5') return numericDistance <= 5;
        return true;
      })();
      return matchesCategory && matchesDay && matchesDistance && slot.status === 'available';
    });
  };

  const bookSlot = async (slotId) => {
    const slot = slots.find((s) => s.id === slotId);
    if (!slot) return null;

    setSlots((prev) => prev.map((s) => (s.id === slotId ? { ...s, status: 'filled' } : s)));
    const booking = {
      id: `booking-${Date.now()}`,
      slotId,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
      slotSnapshot: slot,
    };
    setBookings((prev) => [...prev, booking]);
    return booking;
  };

  const cancelBooking = (bookingId) => {
    setBookings((prev) => prev.map((b) => (b.id === bookingId ? { ...b, status: 'cancelled' } : b)));
    const booking = bookings.find((b) => b.id === bookingId);
    if (booking) {
      setSlots((prev) =>
        prev.map((s) => (s.id === booking.slotId ? { ...s, status: 'available' } : s))
      );
    }
  };

  const addSlot = (newSlot) => {
    const slot = {
      ...newSlot,
      id: `slot-${Date.now()}`,
      start: new Date(newSlot.startTime),
      end: new Date(newSlot.endTime),
      rating: newSlot.rating || 4.7,
      status: 'available',
      image:
        newSlot.image ||
        'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=900&q=80',
    };
    setSlots((prev) => [slot, ...prev]);
    return slot;
  };

  const setSlotStatus = (slotId, status) => {
    setSlots((prev) => prev.map((s) => (s.id === slotId ? { ...s, status } : s)));
  };

  const value = useMemo(
    () => ({
      slots,
      bookings,
      userLocation,
      filterSlots,
      bookSlot,
      cancelBooking,
      addSlot,
      setSlotStatus,
    }),
    [slots, bookings]
  );

  return <DealsContext.Provider value={value}>{children}</DealsContext.Provider>;
};

export const useDeals = () => {
  const ctx = useContext(DealsContext);
  if (!ctx) throw new Error('useDeals must be used within DealsProvider');
  return ctx;
};
