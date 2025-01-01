import React, { useState } from 'react';
import api from '../../utils/api';

const AddOrder = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    customerName: '',
    customerPhone: '',
    customerAddress: '',
    area: '',
    items: '',
    scheduledFor: '',
    totalAmount: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Convert items from a comma-separated string into an array of objects
    const itemsArray = formData.items.split(',').map((item) => {
      const [name, quantity, price] = item.split(':').map((val) => val.trim());
      return { name, quantity: Number(quantity), price: Number(price) };
    });

    try {
      await api.post('/orders', {
        orderNumber: formData.orderNumber,
        customer: {
          name: formData.customerName,
          phone: formData.customerPhone,
          address: formData.customerAddress,
        },
        area: formData.area,
        items: itemsArray,
        scheduledFor: formData.scheduledFor,
        totalAmount: formData.totalAmount,
        status: 'pending',
      });
      alert('Order added successfully');
      setFormData({
        orderNumber: '',
        customerName: '',
        customerPhone: '',
        customerAddress: '',
        area: '',
        items: '',
        scheduledFor: '',
        totalAmount: 0,
      });
    } catch (error) {
      console.error('Failed to add order', error);
      alert('Failed to add order');
    }
  };

  return (
    <div>
      <h1>Add New Order</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          name="orderNumber"
          placeholder="Order Number"
          value={formData.orderNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="customerName"
          placeholder="Customer Name"
          value={formData.customerName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="customerPhone"
          placeholder="Customer Phone"
          value={formData.customerPhone}
          onChange={handleChange}
          required
        />
        <textarea
          name="customerAddress"
          placeholder="Customer Address"
          value={formData.customerAddress}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="area"
          placeholder="Area"
          value={formData.area}
          onChange={handleChange}
          required
        />
        <textarea
          name="items"
          placeholder="Items (e.g., Laptop:1:1500, Mouse:2:20)"
          value={formData.items}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="scheduledFor"
          value={formData.scheduledFor}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="totalAmount"
          placeholder="Total Amount"
          value={formData.totalAmount}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Order</button>
      </form>
    </div>
  );
};

export default AddOrder;
