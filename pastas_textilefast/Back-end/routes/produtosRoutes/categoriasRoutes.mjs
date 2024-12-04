import express from 'express';
import { getCategorias, getCategoriaById } from '../../controllers/categoriasController.mjs';

const router = express.Router();


router.get('/categorias', getCategorias);
router.get('/categorias/:categoria_id', getCategoriaById);

export default router;
