import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { DealsProvider } from './context/DealsContext';
import { BusinessProvider } from './context/BusinessContext';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DealsProvider>
      <BusinessProvider>
        <RouterProvider router={router} />
      </BusinessProvider>
    </DealsProvider>
  </React.StrictMode>
);
