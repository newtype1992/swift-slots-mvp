import React from 'react';
import { useDeals } from '../context/DealsContext';
import Button from '../components/common/Button';
import { FaMapMarkerAlt, FaQrcode } from 'react-icons/fa';

const timeUntil = (start) => {
  const diff = new Date(start) - new Date();
  if (diff <= 0) return 'Starts soon';
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return `${hours}h ${minutes}m`;
};

const MyBookingsPage = () => {
  const { bookings, cancelBooking } = useDeals();

  return (
    <section className="section">
      <div className="container">
        <h2 className="title is-3">My Bookings</h2>
        <p className="subtitle is-6">Show this screen at check-in. You can cancel anytime.</p>

        <div className="columns is-multiline">
          {bookings.map((booking) => (
            <div className="column is-4" key={booking.id}>
              <div className="booking-card">
                <p className="has-text-weight-semibold is-size-5">{booking.slotSnapshot?.title}</p>
                <p className="has-text-weight-semibold">{booking.slotSnapshot?.businessName}</p>
                <p className="is-size-7">{new Date(booking.slotSnapshot?.startTime || booking.slotSnapshot?.start).toLocaleString()}</p>
                <div className="is-flex" style={{ gap: '0.5rem', alignItems: 'center' }}>
                  <FaMapMarkerAlt color="#2ec5ce" />
                  <span className="is-size-7">
                    {booking.slotSnapshot?.location.area} • {booking.slotSnapshot?.location.distance}
                  </span>
                </div>
                <p className="is-size-7">Starts in {timeUntil(booking.slotSnapshot?.start || booking.slotSnapshot?.startTime)}</p>
                <div className="box" style={{ textAlign: 'center', borderRadius: '12px' }}>
                  <FaQrcode size={36} />
                  <p className="is-size-7">Show at check-in</p>
                </div>
                <div className="is-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className={`tag is-rounded ${booking.status === 'cancelled' ? 'is-dark is-light' : 'is-success is-light'}`}>
                    {booking.status}
                  </span>
                  {booking.status !== 'cancelled' && (
                    <Button variant="ghost" size="small" onClick={() => cancelBooking(booking.id)}>
                      Cancel booking
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        {bookings.length === 0 && <p className="has-text-grey">No bookings yet. Grab a deal to see it here.</p>}
      </div>
    </section>
  );
};

export default MyBookingsPage;
