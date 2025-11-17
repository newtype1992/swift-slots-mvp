import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer" style={{ background: 'transparent' }}>
    <div className="content has-text-centered">
      <p>
        <strong>Swift Slots</strong> — last-minute deals for local services.{' '}
        <Link to="/business">List your business</Link> or <Link to="/deals">book a slot</Link>.
      </p>
    </div>
  </footer>
);

export default Footer;
