import React from 'react';

type OrderCardProps = {
  order: {
    orderNumber: string;
    status: string;
    totalAmount: number;
  };
};

const OrderCard: React.FC<OrderCardProps> = ({ order }) => (
  <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
    <h3>Order: {order.orderNumber}</h3>
    <p>Status: {order.status}</p>
    <p>Total Amount: ${order.totalAmount}</p>
  </div>
);

export default OrderCard;
