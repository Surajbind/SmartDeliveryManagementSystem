import express from 'express';
import {
  getAllOrders,
  createOrder,
  updateOrderStatus,
  assignOrderToPartner,
} from '../controllers/OrderController';

export const OrderRoutes = express.Router();

OrderRoutes.get('/', getAllOrders);
OrderRoutes.post('/', createOrder);
OrderRoutes.put('/:id/status', updateOrderStatus);
OrderRoutes.post('/:id/assign', assignOrderToPartner);
