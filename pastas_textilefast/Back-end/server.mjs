import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cnpjRoutes from './routes/cnpjRoutes.mjs';
import empresaRoutes from './routes/cadastroEmpresa.mjs';
import loginRoutes from './routes/loginRoute.mjs';
import carrinhoRoute from './routes/carrinhoRoute.mjs';
import profile from './routes/profileRoute.mjs';
import verifyToken from './utils/authMiddleware.js';
import produtosRoutes from './routes/produtosRoutes/produtosRouters.mjs';
import categoriasRoutes from './routes/produtosRoutes/categoriasRoutes.mjs';
import { upload } from './utils/uploadConfig.mjs';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/cnpj', cnpjRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api', loginRoutes);
app.use('/api/carrinho', carrinhoRoute);
app.use('/api/dataProfile', verifyToken, profile);
app.use('/api/produtos', produtosRoutes);
app.use('/api/categorias', categoriasRoutes);
app.post('/api/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nenhum arquivo enviado.' });
  }
  res.status(200).json({ message: 'Arquivo enviado com sucesso!', file: req.file });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
