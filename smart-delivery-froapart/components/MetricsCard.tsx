import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

type MetricsCardProps = {
  title: string;
  value: number;
};

const MetricsCard: React.FC<MetricsCardProps> = ({ title, value }) => (
  <Card style={{ minWidth: '200px', margin: '10px' }}>
    <CardContent>
      <Typography variant="h5">{title}</Typography>
      <Typography variant="h6">{value}</Typography>
    </CardContent>
  </Card>
);

export default MetricsCard;
