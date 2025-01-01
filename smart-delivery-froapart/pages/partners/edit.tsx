import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';

const EditPartner = () => {
  const router = useRouter();
  const { id } = router.query;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    if (id) {
      const fetchPartner = async () => {
        const res = await api.get(`/partners/${id}`);
        setFormData(res.data);
      };

      fetchPartner();
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.put(`/partners/${id}/profile`, formData);
      alert('Profile updated successfully');
      router.push('/partners');
    } catch (error) {
      console.error('Failed to update profile', error);
    }
  };

  return (
    <div>
      <h1>Edit Partner Profile</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
        />
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default EditPartner;
