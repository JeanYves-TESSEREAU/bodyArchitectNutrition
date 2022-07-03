import express from 'express';
const router = express.Router();

import {
  getAliments,
  getAlimentByID,
  getAlimentByName,
  createAliment,
  updateAliment,
} from '../controller/alimentController.js';

// GET ALL Aliments
router.get('/', getAliments);

// GET ONE ALIMENT BY ID
router.get('/id/:id', getAlimentByID);

// GET ALL ALIMENT BY NAME
router.get('/:name', getAlimentByName);

// CREATE ALL ALIMENTS
router.post('/create', createAliment);
// GET ALL ALIMENTS
router.patch('/id/:id/update', updateAliment);

export default router;
