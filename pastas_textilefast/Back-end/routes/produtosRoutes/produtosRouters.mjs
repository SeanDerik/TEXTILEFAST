import express from 'express';
import { getCategorias } from '../../controllers/categoriasController.mjs';
import { criarProduto } from '../../controllers/produtosController.mjs';
import multer from 'multer';

const router = express.Router();

// Rota para buscar categorias
router.get('/categorias', getCategorias);

// Rota para criar produto
router.post('/produtos', multer().single('imagem'), criarProduto); // Upload de imagem

export default router;
