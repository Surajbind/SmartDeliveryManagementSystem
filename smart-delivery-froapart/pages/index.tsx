import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import MetricsCard from '../components/MetricsCard';

const Dashboard = () => {
  const [metrics, setMetrics] = useState({
    totalPartners: 0,
    activeOrders: 0,
    completedAssignments: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const partnerRes = await api.get('/partners');
      const orderRes = await api.get('/orders');
      const completedAssignments = orderRes.data.filter(
        (order: any) => order.status === 'delivered'
      ).length;

      setMetrics({
        totalPartners: partnerRes.data.length,
        activeOrders: orderRes.data.length,
        completedAssignments,
      });
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <MetricsCard title="Total Partners" value={metrics.totalPartners} />
        <MetricsCard title="Active Orders" value={metrics.activeOrders} />
        <MetricsCard title="Completed Assignments" value={metrics.completedAssignments} />
      </div>
    </div>
  );
};

export default Dashboard;
