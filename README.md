# Swift Slots (Front-end MVP)

Front-end only MVP for a last-minute deals marketplace built with React + Vite. All data is mocked locally and managed via React Context.

## Getting Started

```bash
npm install
npm run dev
```

The dev server defaults to http://localhost:5173.

## Project Structure

- `src/router.jsx` – route config `/`, `/deals`, `/bookings`, `/business`, `/admin`.
- `src/context/DealsContext.jsx` – slots + bookings state, mock booking, filtering, slot creation.
- `src/context/BusinessContext.jsx` – derived KPIs for the dashboard.
- `src/data/` – `slotsMock.js`, `bookingsMock.js`, `businessStatsMock.js` (admin metrics + baselines).
- `src/components/` – layout, deals, business, and common UI primitives.
- `src/pages/` – Landing, browse, bookings, business dashboard, admin overview, not-found.
- `src/styles/` – SCSS variables, mixins, Bulma overrides, and global styles (`main.scss`).

## Styling

- Bulma + custom SCSS tokens/overrides.
- Key colors in `src/styles/_variables.scss` with gradient helpers in `_mixins.scss`.
- Import order handled in `src/styles/main.scss`.

## Future Integration Notes

- Replace mock data in `src/data/` with API calls inside `DealsContext` and `BusinessContext`.
- Booking actions (`bookSlot`, `cancelBooking`, `addSlot`) are isolated in context to swap with real endpoints.
- Slots currently carry `startTime`/`endTime` strings and a derived `start`/`end` Date; backend DTOs can reuse these fields.
