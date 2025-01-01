import React, { useEffect, useState } from 'react';
import api from '../../utils/api';
import OrderCard from '../../components/OrderCard';

const OrderDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await api.get('/orders');
      setOrders(res.data);
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Orders</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {orders.map((order: any) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
};

export default OrderDashboard;
