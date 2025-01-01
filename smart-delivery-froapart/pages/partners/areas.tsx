import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';

const ManageAreas = () => {
  const router = useRouter();
  const { id } = router.query;
  const [areas, setAreas] = useState('');

  useEffect(() => {
    if (id) {
      const fetchPartner = async () => {
        const res = await api.get(`/partners/${id}`);
        setAreas(res.data.areas.join(', '));
      };

      fetchPartner();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const updatedAreas = areas.split(',').map((area) => area.trim());
      await api.put(`/partners/${id}/areas`, { areas: updatedAreas });
      alert('Areas updated successfully');
      router.push('/partners');
    } catch (error) {
      console.error('Failed to update areas', error);
    }
  };

  return (
    <div>
      <h1>Manage Areas</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={areas}
          onChange={(e) => setAreas(e.target.value)}
          placeholder="Enter areas separated by commas"
          required
        />
        <button type="submit">Update Areas</button>
      </form>
    </div>
  );
};

export default ManageAreas;
