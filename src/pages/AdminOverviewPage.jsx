import React from 'react';
import { adminOverviewMock } from '../data/businessStatsMock';

const AdminOverviewPage = () => {
  const stats = [
    { label: 'Total users', value: adminOverviewMock.totalUsers.toLocaleString() },
    { label: 'Businesses', value: adminOverviewMock.totalBusinesses.toLocaleString() },
    { label: 'Bookings', value: adminOverviewMock.totalBookings.toLocaleString() },
    { label: 'Fill rate', value: `${(adminOverviewMock.fillRate * 100).toFixed(0)}%` },
  ];

  return (
    <section className="section">
      <div className="container">
        <p className="has-text-weight-semibold is-uppercase has-text-link">Admin Overview</p>
        <h2 className="title is-3">Marketplace pulse</h2>
        <p className="subtitle is-6">Static metrics for the MVP.</p>
        <div className="section-card-row">
          {stats.map((item) => (
            <div key={item.label} className="stat-card">
              <div>
                <p className="stat-label">{item.label}</p>
                <p className="stat-value">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminOverviewPage;
