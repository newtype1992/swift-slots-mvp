import React from 'react';
import BusinessStatsSummary from '../components/business/BusinessStatsSummary';
import SlotForm from '../components/business/SlotForm';
import SlotTable from '../components/business/SlotTable';

const BusinessDashboardPage = () => {
  return (
    <section className="section">
      <div className="container">
        <p className="has-text-weight-semibold is-uppercase has-text-link">Business Dashboard</p>
        <h2 className="title is-3">See how many last-minute slots you’ve filled.</h2>
        <p className="subtitle is-6">Post a slot, track fill rate, and reopen spots instantly.</p>

        <BusinessStatsSummary />

        <div style={{ marginTop: '2rem' }}>
          <h3 className="title is-4">Create Slot</h3>
          <SlotForm />
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h3 className="title is-4">Manage Slots</h3>
          <SlotTable />
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardPage;
