import { Request, Response } from 'express';
import Order from '../models/Order';
import Partner from '../models/Partner';
import Assignment from '../models/Assignment';

// Get all orders
export const getAllOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders', error });
  }
};

// Create a new order
export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrder = new Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create order', error });
  }
};

//Assign order to partner
export const assignOrderToPartner = async (req: Request, res: Response): Promise<void> => {
  try {
    const { partnerId } = req.body;
    const order = await Order.findById(req.params.id);
    const partner = await Partner.findById(partnerId);

    if (!order || !partner) {
      res.status(404).json({ message: 'Order or Partner not found' });
      return;
    }

    if (partner.currentLoad >= 3) {
      res.status(400).json({ message: 'Partner is overloaded' });
      return;
    }

    order.status = 'assigned';
    order.assignedTo = partnerId;
    partner.currentLoad += 1;

    await order.save();
    await partner.save();

    res.status(200).json({ message: 'Order assigned successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// // Update order status
// export const updateOrderStatus = async (req: Request, res: Response) => {
//   try {
//     const updatedOrder = await Order.findByIdAndUpdate(
//       req.params.id,
//       { status: req.body.status },
//       { new: true }
//     );
//     res.status(200).json(updatedOrder);
//   } catch (error) {
//     res.status(500).json({ message: 'Failed to update order status', error });
//   }
// };





// Update Order Status and Mark Assignment as Completed
export const updateOrderStatus = async  (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Update order status
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });

    if (!order) {
      res.status(404).json({ message: 'Order not found' });
      return;
    }

    // If order is marked as delivered, update assignment
    if (status === 'delivered' && order.assignedTo) {
      const assignment = await Assignment.findOne({ orderId: id });
      if (assignment) {
        assignment.status = 'completed';
        await assignment.save();
      }
    }

    res.status(200).json({ message: 'Order status updated', order });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update order status', error });
  }
};

