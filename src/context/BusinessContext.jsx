import React, { createContext, useContext, useMemo } from 'react';
import { useDeals } from './DealsContext';
import { businessStatsMock } from '../data/businessStatsMock';

const BusinessContext = createContext();

export const BusinessProvider = ({ children }) => {
  const { slots, bookings } = useDeals();

  const stats = useMemo(() => {
    const filled = slots.filter((s) => s.status === 'filled').length;
    const expired = slots.filter((s) => s.status === 'expired').length;
    const available = slots.filter((s) => s.status === 'available').length;
    const recoveredRevenue = bookings
      .filter((b) => b.status === 'confirmed')
      .reduce((sum, b) => sum + (b.slotSnapshot?.price || 0), 0);

    return {
      slotsPosted: slots.length,
      slotsFilled: filled,
      slotsAvailable: available,
      slotsExpired: expired,
      newCustomers: businessStatsMock.baselineNewCustomers + filled * 2,
      revenueRecovered: businessStatsMock.baselineRevenueRecovered + recoveredRevenue,
      fillRate:
        slots.length === 0 ? businessStatsMock.baselineFillRate : filled / slots.length,
    };
  }, [slots, bookings]);

  const value = useMemo(() => ({ stats }), [stats]);

  return <BusinessContext.Provider value={value}>{children}</BusinessContext.Provider>;
};

export const useBusiness = () => {
  const ctx = useContext(BusinessContext);
  if (!ctx) throw new Error('useBusiness must be used within BusinessProvider');
  return ctx;
};
