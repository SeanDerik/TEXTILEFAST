import express from 'express';
import { buscarCNPJ } from '../controllers/cnpjController.mjs';

const router = express.Router();
router.get('/:cnpj', buscarCNPJ);

export default router;
