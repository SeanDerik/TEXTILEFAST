import express from 'express';
import Produtos from '../models/produtos.mjs'; // Your Produtos model
import { Op } from 'sequelize';

const router = express.Router();

// Rota para buscar produtos de outras empresas
router.get('/excluir', async (req, res) => {
  console.log('Request received at /excluir');  // Confirm the request is being made
  const { empresaId } = req.query;
  console.log('Received empresaId:', empresaId);

  if (!empresaId) {
    return res.status(400).json({ error: 'Empresa ID is required' });
  }

  const parsedEmpresaId = parseInt(empresaId);
  console.log('Parsed empresaId:', parsedEmpresaId);

  if (isNaN(parsedEmpresaId)) {
    return res.status(400).json({ error: 'Invalid Empresa ID' });
  }

  try {
    // Log the query
    console.log('Querying for products with fornecedor_id !=', parsedEmpresaId);

    const produtos = await Produtos.findAll({
      where: {
        fornecedor_id: { [Op.ne]: parsedEmpresaId },  // Ensure it fetches products from other companies
      },
      logging: console.log,  // This logs the executed SQL query
    });

    const produtosData = produtos.map(produto => produto.toJSON());

    console.log('Produtos encontrados:', produtosData);
    return res.status(200).json(produtosData);  // Return the correct data
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;