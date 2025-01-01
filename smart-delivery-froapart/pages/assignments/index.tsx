import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

const AssignmentMetrics = () => {
  const [metrics, setMetrics] = useState({
    totalAssignments: 0,
    completedAssignments: 0,
    pendingAssignments: 0,
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      const orders = await api.get('/orders');
      const totalAssignments = orders.data.length;
      const completedAssignments = orders.data.filter(
        (order: any) => order.status === 'delivered'
      ).length;
      const pendingAssignments = totalAssignments - completedAssignments;

      setMetrics({ totalAssignments, completedAssignments, pendingAssignments });
    };

    fetchMetrics();
  }, []);

  return (
    <div>
      <h1>Assignment Metrics</h1>
      <p>Total Assignments: {metrics.totalAssignments}</p>
      <p>Completed Assignments: {metrics.completedAssignments}</p>
      <p>Pending Assignments: {metrics.pendingAssignments}</p>
    </div>
  );
};

export default AssignmentMetrics;
