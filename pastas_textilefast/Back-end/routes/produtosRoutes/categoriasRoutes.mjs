import express from 'express';
import { getCategorias, getCategoriaById } from '../controllers/categoriasController.mjs';

const router = express.Router();

// Rota para obter todas as categorias
router.get('/categorias', getCategorias);

// Rota para obter uma categoria específica pelo ID
router.get('/categorias/:categoria_id', getCategoriaById);

export default router;
