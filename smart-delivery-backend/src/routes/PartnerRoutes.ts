import express from 'express';
import {
  getAllPartners,
  createPartner,
  updatePartner,
  deletePartner,
  updatePartnerProfile,
} from '../controllers/PartnerControllers';
import Partner from '../models/Partner';

export const PartnerRoutes = express.Router();

PartnerRoutes.get('/', getAllPartners);
PartnerRoutes.post('/', createPartner);
PartnerRoutes.put('/:id', updatePartner);
PartnerRoutes.delete('/:id', deletePartner);
PartnerRoutes.put('/:id/profile', updatePartnerProfile);
PartnerRoutes.put('/:id/areas', async (req, res) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(
      req.params.id,
      { $set: { areas: req.body.areas } },
      { new: true }
    );
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update areas', error });
  }
});


