import React from 'react';
import Button from '../common/Button';
import PillTag from '../common/PillTag';

const HeroSection = ({ title, subtitle, primaryCta, secondaryCta, badge }) => {
  return (
    <section className="section" style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="columns is-vcentered is-variable is-8">
          <div className="column is-6">
            {badge && <PillTag>{badge}</PillTag>}
            <h1 className="title is-1" style={{ color: '#0f172a' }}>
              {title}
            </h1>
            <p className="subtitle is-5" style={{ color: '#334155' }}>
              {subtitle}
            </p>
            <div className="buttons">
              {primaryCta && (
                <Button variant="primary" onClick={primaryCta.onClick}>
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button variant="secondary" onClick={secondaryCta.onClick}>
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
          <div className="column is-6">
            <div className="hero-band">
              <p className="has-text-weight-semibold">Available Right Now</p>
              <div className="section-card-row" style={{ marginTop: '1rem' }}>
                <div className="deal-card">
                  <img
                    src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80"
                    alt="Preview"
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '0 1rem 1.25rem' }}>
                    <p className="has-text-weight-semibold">Evening Barre • 50% OFF</p>
                    <p className="is-size-7">Starts in 1h 23m · Downtown · 0.6 mi</p>
                  </div>
                </div>
                <div className="deal-card">
                  <img
                    src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80"
                    alt="Preview"
                    style={{ width: '100%', height: '180px', objectFit: 'cover' }}
                  />
                  <div style={{ padding: '0 1rem 1.25rem' }}>
                    <p className="has-text-weight-semibold">Lunch HIIT · Midtown</p>
                    <p className="is-size-7">Book before it fills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
