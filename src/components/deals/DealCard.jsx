import React from 'react';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';
import Badge from '../common/Badge';
import RatingStars from '../common/RatingStars';
import Button from '../common/Button';

const timeUntil = (start) => {
  const now = new Date();
  const diffMs = new Date(start) - now;
  if (diffMs <= 0) return 'Starting soon';
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m`;
};

const DealCard = ({ slot, onSelect }) => {
  return (
    <div className="deal-card">
      <div style={{ position: 'relative' }}>
        <img
          src={slot.image}
          alt={slot.title}
          style={{ width: '100%', height: '180px', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: '12px', right: '12px' }}>
          <Badge>{`${slot.discount}% OFF`}</Badge>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '12px',
            left: '12px',
            background: 'rgba(15, 23, 42, 0.66)',
            color: 'white',
            padding: '8px 12px',
            borderRadius: '999px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <FaRegClock />
          <span>Starts in {timeUntil(slot.start)}</span>
        </div>
      </div>
      <div style={{ padding: '0 1.1rem 1.25rem' }}>
        <p className="has-text-weight-semibold is-size-5" style={{ color: '#0f172a' }}>
          {slot.title}
        </p>
        <p className="is-size-6 has-text-weight-semibold">{slot.businessName}</p>
        <p className="is-size-7" style={{ color: '#475569' }}>
          {slot.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.35rem' }}>
          <FaMapMarkerAlt color="#2ec5ce" />
          <span className="is-size-7">{slot.location.area} • {slot.location.distance}</span>
        </div>
        <div style={{ margin: '0.5rem 0' }}>
          <RatingStars rating={slot.rating} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.5rem',
            marginBottom: '0.75rem',
          }}
        >
          <div>
            <p className="is-size-4 has-text-weight-bold" style={{ color: '#0f172a' }}>
              ${slot.price}
            </p>
            <p className="is-size-7" style={{ textDecoration: 'line-through', color: '#94a3b8' }}>
              ${slot.originalPrice}
            </p>
          </div>
          <Button variant="primary" onClick={onSelect}>
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DealCard;
