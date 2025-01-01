import express from 'express';
import { runAssignmentAlgorithm } from '../controllers/AssignmentController';

export const AssignmentRoutes = express.Router();

AssignmentRoutes.post('/run', runAssignmentAlgorithm);
