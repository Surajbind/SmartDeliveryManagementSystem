import React from 'react';

type PartnerCardProps = {
  partner: {
    name: string;
    email: string;
    phone: string;
    status: string;
  };
};

const PartnerCard: React.FC<PartnerCardProps> = ({ partner }) => (
  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
    <h3>{partner.name}</h3>
    <p>Email: {partner.email}</p>
    <p>Phone: {partner.phone}</p>
    <p>Status: {partner.status}</p>
  </div>
);

export default PartnerCard;
