import React from 'react';
import DealCard from './DealCard';

const DealsGrid = ({ slots, onSelect }) => {
  if (!slots.length) {
    return <p className="has-text-grey">No slots match those filters yet. Try another category.</p>;
  }

  return (
    <div className="columns is-multiline">
      {slots.map((slot) => (
        <div className="column is-4" key={slot.id}>
          <DealCard slot={slot} onSelect={() => onSelect(slot)} />
        </div>
      ))}
    </div>
  );
};

export default DealsGrid;
