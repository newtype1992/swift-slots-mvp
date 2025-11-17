import React from 'react';
import { FaStar } from 'react-icons/fa';

const RatingStars = ({ rating }) => {
  const stars = Array.from({ length: 5 }).map((_, idx) => {
    const isFilled = rating >= idx + 1 || rating >= idx + 0.5;
    return <FaStar key={idx} color={isFilled ? '#f59e0b' : '#e5e7eb'} />;
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
      {stars}
      <span style={{ marginLeft: '6px', color: '#0f172a' }}>{rating.toFixed(1)}</span>
    </div>
  );
};

export default RatingStars;
