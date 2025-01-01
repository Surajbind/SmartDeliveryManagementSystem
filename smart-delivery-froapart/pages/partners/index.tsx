import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import PartnerCard from '../../components/PartnerCard';

const PartnerList = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    const fetchPartners = async () => {
      const res = await api.get('/partners');
      setPartners(res.data);
    };

    fetchPartners();
  }, []);

  return (
    <div>
      <h1>Partners</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {partners.map((partner: any) => (
          <PartnerCard key={partner._id} partner={partner} />
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
