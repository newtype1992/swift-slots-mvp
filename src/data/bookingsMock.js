import { slotsMock } from './slotsMock';

const demoSlot = slotsMock[1];

export const bookingsMock = [
  {
    id: 'booking-1',
    slotId: demoSlot.id,
    status: 'confirmed',
    bookedAt: new Date().toISOString(),
    slotSnapshot: demoSlot,
  },
];
