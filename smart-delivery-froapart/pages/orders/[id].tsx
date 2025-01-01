import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import api from '../../utils/api';

const OrderDetails = () => {
  const [order, setOrder] = useState<any>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      const fetchOrder = async () => {
        const res = await api.get(`/orders/${id}`);
        setOrder(res.data);
      };

      fetchOrder();
    }
  }, [id]);

  if (!order) return <p>Loading...</p>;



  return (
    <div>
      <h1>Order Details</h1>
      <p>Order Number: {order.orderNumber}</p>
      <p>Customer: {order.customer.name}</p>
      <p>Status: {order.status}</p>
      <p>Total Amount: ${order.totalAmount}</p>
      <h3>Items</h3>
      <ul>
        {order.items.map((item: any, index: number) => (
          <li key={index}>
            {item.name} - {item.quantity} x ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
