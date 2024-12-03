import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cnpjRoutes from './routes/cnpjRoutes.mjs';
import empresaRoutes from './routes/cadastroEmpresa.mjs';
import loginRoutes from './routes/loginRoute.mjs';
import carrinhoRoute from './routes/carrinhoRoute.mjs';
import profile from './routes/profileRoute.mjs';
import verifyToken from './utils/authMiddleware.js';
import produtosRoutes from './routes/produtosRoute.mjs';
import categoriasRoutes from './routes/produtosRoutes/categoriasRoutes.mjs';
import uploadRoutes from './routes/produtosRoutes/multerImgProduto.mjs';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/cnpj', cnpjRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api', loginRoutes);
app.use('/api/carrinho', carrinhoRoute);
app.use('/api/dataProfile', verifyToken, profile);
app.use('/api', produtosRoutes);
app.use('/api/categorias', categoriasRoutes); // Rota para categorias
app.use('/api/upload', uploadRoutes); // Rota para upload de imagens

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
