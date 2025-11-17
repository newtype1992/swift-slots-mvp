import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage';
import BrowseDealsPage from './pages/BrowseDealsPage';
import MyBookingsPage from './pages/MyBookingsPage';
import BusinessDashboardPage from './pages/BusinessDashboardPage';
import AdminOverviewPage from './pages/AdminOverviewPage';
import NotFoundPage from './pages/NotFoundPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'deals', element: <BrowseDealsPage /> },
      { path: 'bookings', element: <MyBookingsPage /> },
      { path: 'business', element: <BusinessDashboardPage /> },
      { path: 'admin', element: <AdminOverviewPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);
