import React from 'react';
import PillTag from '../common/PillTag';

const categories = ['Yoga', 'HIIT', 'Pilates', 'Massage', 'Cycling', 'Recovery', 'Boxing', 'Strength', 'Barre'];

const DealsFilters = ({ filters, onChange }) => {
  const setFilter = (key, value) => onChange({ ...filters, [key]: value });

  return (
    <div className="box" style={{ borderRadius: '16px' }}>
      <div className="columns is-vcentered is-mobile">
        <div className="column">
          <p className="has-text-weight-semibold">Category</p>
          <div className="tags" style={{ flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <PillTag key={cat}>
                <button
                  style={{ border: 'none', background: 'transparent', cursor: 'pointer' }}
                  onClick={() => setFilter('category', filters.category === cat ? '' : cat)}
                >
                  {filters.category === cat ? '✓ ' : ''}
                  {cat}
                </button>
              </PillTag>
            ))}
          </div>
        </div>
        <div className="column is-3">
          <p className="has-text-weight-semibold">Day</p>
          <div className="buttons has-addons">
            <button
              className={`btn ${filters.day === 'today' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('day', 'today')}
            >
              Today
            </button>
            <button
              className={`btn ${filters.day === 'week' ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('day', 'week')}
            >
              This Week
            </button>
            <button
              className={`btn ${!filters.day ? 'btn-primary' : 'btn-secondary'}`}
              onClick={() => setFilter('day', '')}
            >
              All
            </button>
          </div>
        </div>
        <div className="column is-3">
          <p className="has-text-weight-semibold">Distance</p>
          <div className="select is-fullwidth">
            <select value={filters.distance} onChange={(e) => setFilter('distance', e.target.value)}>
              <option value="all">All</option>
              <option value="1">Under 1 mi</option>
              <option value="5">Under 5 mi</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DealsFilters;
