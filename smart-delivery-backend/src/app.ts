import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import { PartnerRoutes } from './routes/PartnerRoutes';
import { OrderRoutes } from './routes/OrderRoutes';
import { AssignmentRoutes } from './routes/AssignmentRoutes';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/partners', PartnerRoutes);
app.use('/api/orders', OrderRoutes);
app.use('/api/assignments', AssignmentRoutes);

export default app;
