import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { FaMapMarkerAlt, FaRegClock } from 'react-icons/fa';

const formatTime = (date) => new Date(date).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

const BookingModal = ({ slot, onClose, onConfirm }) => {
  const [status, setStatus] = useState('idle');

  const handleConfirm = async () => {
    setStatus('loading');
    await new Promise((resolve) => setTimeout(resolve, 700));
    await onConfirm(slot.id);
    setStatus('success');
  };

  return (
    <div className={`modal ${slot ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>
      <div className="modal-card" style={{ borderRadius: '18px' }}>
        <header className="modal-card-head">
          <p className="modal-card-title">{status === 'success' ? 'You’re in!' : slot?.title}</p>
          <button className="delete" aria-label="close" onClick={onClose}></button>
        </header>
        <section className="modal-card-body" style={{ display: 'grid', gap: '0.75rem' }}>
          {status !== 'success' && (
            <>
              <Badge>{slot?.discount}% OFF</Badge>
              <p className="has-text-weight-semibold">{slot?.businessName}</p>
              <p>{slot?.description}</p>
              <div className="is-flex" style={{ gap: '0.75rem', alignItems: 'center' }}>
                <FaRegClock />
                <span>
                  {new Date(slot?.startTime).toLocaleDateString()} · {formatTime(slot?.startTime)} –{' '}
                  {formatTime(slot?.endTime)}
                </span>
              </div>
              <div className="is-flex" style={{ gap: '0.5rem', alignItems: 'center' }}>
                <FaMapMarkerAlt color="#2ec5ce" />
                <span>
                  {slot?.location.area} · {slot?.location.distance}
                </span>
              </div>
              <div className="is-flex is-justify-content-space-between is-align-items-center">
                <div>
                  <p className="has-text-weight-semibold is-size-4">${slot?.price}</p>
                  <p className="is-size-7" style={{ textDecoration: 'line-through', color: '#94a3b8' }}>
                    ${slot?.originalPrice}
                  </p>
                </div>
                <Button variant="primary" onClick={handleConfirm} disabled={status === 'loading'}>
                  {status === 'loading' ? 'Booking...' : 'Confirm Booking'}
                </Button>
              </div>
            </>
          )}
          {status === 'success' && (
            <div className="content has-text-centered">
              <p className="is-size-4 has-text-weight-semibold">You’re in!</p>
              <p>We saved your spot. Show this screen at check-in.</p>
              <div className="buttons is-centered" style={{ marginTop: '1rem' }}>
                <Link className="btn btn-primary" to="/bookings" onClick={onClose}>
                  View My Bookings
                </Link>
                <button className="btn btn-secondary" onClick={onClose}>
                  Back to deals
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BookingModal;
