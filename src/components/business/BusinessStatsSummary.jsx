import React from 'react';
import { useBusiness } from '../../context/BusinessContext';

const StatBlock = ({ label, value, helper }) => (
  <div className="stat-card">
    <div>
      <p className="stat-label">{label}</p>
      <p className="stat-value">{value}</p>
    </div>
    {helper && <span className="tag is-rounded is-success is-light">{helper}</span>}
  </div>
);

const BusinessStatsSummary = () => {
  const { stats } = useBusiness();

  return (
    <div className="section-card-row">
      <StatBlock label="Slots posted" value={stats.slotsPosted} helper={`${(stats.fillRate * 100).toFixed(0)}% fill`} />
      <StatBlock label="Slots filled" value={stats.slotsFilled} helper={`Avail: ${stats.slotsAvailable}`} />
      <StatBlock label="New customers" value={stats.newCustomers} />
      <StatBlock label="Revenue recovered" value={`$${stats.revenueRecovered.toLocaleString()}`} />
    </div>
  );
};

export default BusinessStatsSummary;
