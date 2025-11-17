import React from 'react';
import Button from '../common/Button';
import { useDeals } from '../../context/DealsContext';

const SlotTable = () => {
  const { slots, setSlotStatus } = useDeals();

  const statusColor = (status) => {
    if (status === 'available') return 'is-success is-light';
    if (status === 'filled') return 'is-link is-light';
    return 'is-dark is-light';
  };

  return (
    <div className="table-container">
      <table className="table is-fullwidth">
        <thead>
          <tr>
            <th>Class</th>
            <th>Date/Time</th>
            <th>Discount</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {slots.map((slot) => (
            <tr key={slot.id}>
              <td>
                <p className="has-text-weight-semibold">{slot.title}</p>
                <p className="is-size-7">{slot.businessName}</p>
              </td>
              <td>{new Date(slot.startTime || slot.start).toLocaleString()}</td>
              <td>{slot.discount}%</td>
              <td>
                <span className={`table-slot-status tag ${statusColor(slot.status)}`}>{slot.status}</span>
              </td>
              <td className="has-text-right" style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                <Button
                  variant="secondary"
                  size="small"
                  onClick={() => setSlotStatus(slot.id, 'expired')}
                  disabled={slot.status === 'expired'}
                >
                  Mark expired
                </Button>
                <Button
                  variant="ghost"
                  size="small"
                  onClick={() => setSlotStatus(slot.id, 'available')}
                >
                  Reopen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SlotTable;
