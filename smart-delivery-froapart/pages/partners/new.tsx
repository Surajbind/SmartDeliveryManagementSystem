import React, { useState } from 'react';
import api from '../../utils/api';

const AddPartner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    areas: '',
    shiftStart: '',
    shiftEnd: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/partners', {
        ...formData,
        areas: formData.areas.split(',').map((area) => area.trim()),
        shift: { start: formData.shiftStart, end: formData.shiftEnd },
      });
      alert('Partner added successfully');
    } catch (error) {
      console.error('Failed to add partner', error);
    }
  };

  return (
    <div>
      <h1>Add New Partner</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="areas"
          placeholder="Areas (comma-separated)"
          value={formData.areas}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="shiftStart"
          placeholder="Shift Start"
          value={formData.shiftStart}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="shiftEnd"
          placeholder="Shift End"
          value={formData.shiftEnd}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Partner</button>
      </form>
    </div>
  );
};

export default AddPartner;
