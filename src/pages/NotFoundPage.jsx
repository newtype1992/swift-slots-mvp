import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="section">
    <div className="container has-text-centered">
      <h2 className="title is-3">Page not found</h2>
      <p className="subtitle is-6">The page you’re looking for doesn’t exist.</p>
      <Link className="btn btn-primary" to="/">
        Back home
      </Link>
    </div>
  </section>
);

export default NotFoundPage;
