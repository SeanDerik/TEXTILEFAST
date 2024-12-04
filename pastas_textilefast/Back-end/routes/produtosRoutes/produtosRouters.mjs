import express from 'express';
import multer from 'multer';
import path from 'path';
import { obterTodosProdutos, criarProduto, atualizarProduto, excluirProduto } from '../../controllers/produtosController.mjs';
import verifyToken from '../../utils/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.mimetype)) {
      return cb(new Error('Tipo de arquivo não permitido!'), false);
    }
    cb(null, true);
  },
});

router.get('/produtos', obterTodosProdutos);
router.post('/produtos', verifyToken, upload.single('imagem'), (req, res, next) => {
  console.log('file produtosRouters:', req.file);
  if (req.fileValidationError) {
    return res.status(400).json({ error: req.fileValidationError });
  }
  next();
}, criarProduto);
router.put('/produtos/:id', verifyToken, upload.single('imagem'), atualizarProduto);
router.delete('/produtos/:id', verifyToken, excluirProduto);

export default router;
