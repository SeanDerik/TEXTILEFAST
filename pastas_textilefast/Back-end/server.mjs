import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cnpjRoutes from './routes/cnpjRoutes.mjs';
import empresaRoutes from './routes/cadastroEmpresa.mjs';
import carrinhoRoutes from './routes/carrinhoRoute.mjs'; // Correct route import

dotenv.config();

const app = express();

// Log every incoming request (for debugging)
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();  // Move to the next middleware/route handler
});

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());  // Enable JSON body parsing

// Routes
app.use('/api/cnpj', cnpjRoutes);
app.use('/api/empresas', empresaRoutes);
app.use('/api/carrinho', carrinhoRoutes);
// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
