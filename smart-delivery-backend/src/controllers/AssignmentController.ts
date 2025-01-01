import { Request, Response } from 'express';
import { assignOrders } from '../services/AssignmentService';

export const runAssignmentAlgorithm = async (req: Request, res: Response) => {
  try {
    const result = await assignOrders();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Failed to run assignment algorithm', error });
  }
};
