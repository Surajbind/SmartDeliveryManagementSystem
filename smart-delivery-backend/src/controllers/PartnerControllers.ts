import { Request, Response } from 'express';
import Partner from '../models/Partner';

// Get all partners
export const getAllPartners = async (req: Request, res: Response) => {
  try {
    const partners = await Partner.find();
    res.status(200).json(partners);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch partners', error });
  }
};

// Create a new partner
export const createPartner = async (req: Request, res: Response) => {
  try {
    const newPartner = new Partner(req.body);
    const savedPartner = await newPartner.save();
    res.status(201).json(savedPartner);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create partner', error });
  }
};

// Update a partner
export const updatePartner = async (req: Request, res: Response) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update partner', error });
  }
};


// Update Partner Profile
export const updatePartnerProfile = async (req: Request, res: Response) => {
  try {
    const updatedPartner = await Partner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPartner) {
       res.status(404).json({ message: 'Partner not found' });
       return
      }
    res.status(200).json(updatedPartner);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update partner profile', error });
  }
};





// Delete a partner
export const deletePartner = async (req: Request, res: Response) => {
  try {
    await Partner.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Partner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete partner', error });
  }
};
