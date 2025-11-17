import React, { useState } from 'react';
import Button from '../common/Button';
import { useDeals } from '../../context/DealsContext';

const defaultState = {
  category: 'Yoga',
  title: '',
  startTime: '',
  endTime: '',
  price: '',
  originalPrice: '',
  discount: 40,
  location: { area: '' },
};

const SlotForm = () => {
  const [form, setForm] = useState(defaultState);
  const [message, setMessage] = useState('');
  const { addSlot } = useDeals();

  const updateField = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.startTime || !form.endTime || !form.price || !form.originalPrice) {
      setMessage('Please fill the required fields.');
      return;
    }
    const payload = {
      ...form,
      price: Number(form.price),
      originalPrice: Number(form.originalPrice),
      location: { ...form.location, distance: '1.2 mi' },
    };
    addSlot(payload);
    setMessage('Slot posted successfully');
    setForm(defaultState);
  };

  return (
    <div className="box" style={{ borderRadius: '16px' }}>
      <form onSubmit={onSubmit} className="columns is-multiline is-variable is-4">
        <div className="column is-4">
          <label className="label">Category</label>
          <div className="select is-fullwidth">
            <select value={form.category} onChange={(e) => updateField('category', e.target.value)}>
              <option>Yoga</option>
              <option>HIIT</option>
              <option>Pilates</option>
              <option>Massage</option>
              <option>Strength</option>
            </select>
          </div>
        </div>
        <div className="column is-8">
          <label className="label">Title</label>
          <input
            className="input"
            value={form.title}
            onChange={(e) => updateField('title', e.target.value)}
            placeholder="Vinyasa Flow Class"
            required
          />
        </div>
        <div className="column is-3">
          <label className="label">Start time</label>
          <input
            className="input"
            type="datetime-local"
            value={form.startTime}
            onChange={(e) => updateField('startTime', e.target.value)}
            required
          />
        </div>
        <div className="column is-3">
          <label className="label">End time</label>
          <input
            className="input"
            type="datetime-local"
            value={form.endTime}
            onChange={(e) => updateField('endTime', e.target.value)}
            required
          />
        </div>
        <div className="column is-3">
          <label className="label">Price</label>
          <input
            className="input"
            type="number"
            value={form.price}
            onChange={(e) => updateField('price', e.target.value)}
            required
          />
        </div>
        <div className="column is-3">
          <label className="label">Original price</label>
          <input
            className="input"
            type="number"
            value={form.originalPrice}
            onChange={(e) => updateField('originalPrice', e.target.value)}
            required
          />
        </div>
        <div className="column is-6">
          <label className="label">Location</label>
          <input
            className="input"
            value={form.location.area}
            onChange={(e) => updateField('location', { ...form.location, area: e.target.value })}
            placeholder="Downtown"
            required
          />
        </div>
        <div className="column is-6">
          <label className="label">Discount %</label>
          <input
            className="input"
            type="number"
            value={form.discount}
            onChange={(e) => updateField('discount', Number(e.target.value))}
          />
        </div>
        <div className="column is-12" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>{message && <p className="has-text-success">{message}</p>}</div>
          <Button variant="primary" type="submit">
            Post Slot
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SlotForm;
