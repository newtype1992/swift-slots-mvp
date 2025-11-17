import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/layout/HeroSection';
import PillTag from '../components/common/PillTag';
import Button from '../components/common/Button';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeroSection
        badge="New"
        title="Last-Minute Deals on Local Services"
        subtitle="Fill your day with workouts, spa breaks, and studio classes at up to 50% off. Book instantly or post open spots to get filled fast."
        primaryCta={{ label: 'Browse Deals', onClick: () => navigate('/deals') }}
        secondaryCta={{ label: 'List Your Business', onClick: () => navigate('/business') }}
      />

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="columns is-variable is-6">
            <div className="column is-7">
              <div className="hero-band">
                <PillTag>How Swift Slots works</PillTag>
                <h2 className="title is-3" style={{ marginTop: '0.75rem' }}>
                  Never Miss a Deal Again
                </h2>
                <p className="is-size-5" style={{ maxWidth: '540px' }}>
                  We scan last-minute openings across local businesses. Grab the slot you want, or post your own to get filled fast.
                </p>
                <div className="buttons" style={{ marginTop: '1rem' }}>
                  <Button variant="primary" onClick={() => navigate('/deals')}>
                    Get Started Free
                  </Button>
                  <Button variant="secondary" onClick={() => navigate('/business')}>
                    List Your Business
                  </Button>
                </div>
              </div>
            </div>
            <div className="column is-5">
              <div className="section-card-row">
                {[{ label: 'Active slots', value: '2,500+' }, { label: 'Businesses', value: '500+' }, { label: 'Happy users', value: '50K+' }].map((item) => (
                  <div key={item.label} className="metric-card">
                    <h4>{item.value}</h4>
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <div>
              <p className="has-text-weight-semibold">Still deciding?</p>
              <h3 className="title is-3">Fill your empty slots in minutes</h3>
              <p className="is-size-6">Push out last-minute drops and let locals book instantly.</p>
            </div>
            <div className="buttons">
              <Button variant="primary" onClick={() => navigate('/business')}>
                For Businesses
              </Button>
              <Button variant="secondary" onClick={() => navigate('/deals')}>
                Browse Deals
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
