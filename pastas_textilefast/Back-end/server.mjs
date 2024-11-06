import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cnpjRoutes from './routes/cnpjRoutes.mjs';
import empresaRoutes from './routes/cadastroEmpresa.mjs'; // nova rota

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/cnpj', cnpjRoutes);
app.use('/api/empresas', empresaRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
