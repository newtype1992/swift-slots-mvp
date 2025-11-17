import React, { useMemo, useState } from 'react';
import DealsFilters from '../components/deals/DealsFilters';
import DealsGrid from '../components/deals/DealsGrid';
import BookingModal from '../components/deals/BookingModal';
import { useDeals } from '../context/DealsContext';

const BrowseDealsPage = () => {
  const { filterSlots, bookSlot } = useDeals();
  const [filters, setFilters] = useState({ category: '', day: 'today', distance: 'all' });
  const [selectedSlot, setSelectedSlot] = useState(null);

  const filteredSlots = useMemo(() => filterSlots(filters), [filterSlots, filters]);

  return (
    <div className="section">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div>
              <p className="has-text-weight-semibold is-uppercase has-text-link">Available Right Now</p>
              <h2 className="title is-3">Book these slots before they’re gone</h2>
            </div>
          </div>
          <div className="level-right">
            <div className="buttons has-addons">
              <button
                className={`button ${filters.day === 'today' ? 'is-primary' : ''}`}
                onClick={() => setFilters({ ...filters, day: 'today' })}
              >
                Today
              </button>
              <button
                className={`button ${filters.day === 'week' ? 'is-primary' : ''}`}
                onClick={() => setFilters({ ...filters, day: 'week' })}
              >
                This Week
              </button>
            </div>
          </div>
        </div>

        <DealsFilters filters={filters} onChange={setFilters} />
        <DealsGrid slots={filteredSlots} onSelect={setSelectedSlot} />
      </div>

      <BookingModal
        slot={selectedSlot}
        onClose={() => setSelectedSlot(null)}
        onConfirm={bookSlot}
      />
    </div>
  );
};

export default BrowseDealsPage;
