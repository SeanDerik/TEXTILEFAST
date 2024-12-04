/* import express from 'express';
import {
  listarProdutos,
  criarProduto,
  atualizarProduto,
  excluirProduto,
} from '../controllers/produtosController.mjs';
import verifyToken from '../utils/authMiddleware.js';

const router = express.Router();

router.get('/produtos/:fornecedor_id', verifyToken, listarProdutos);
router.post('/produtos', upload.single('imagem'), criarProduto);
router.put('/produtos/:produto_id', verifyToken, atualizarProduto);
router.delete('/produtos/:produto_id', verifyToken, excluirProduto);

export default router;
 */