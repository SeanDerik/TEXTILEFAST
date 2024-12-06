import express from 'express';
import Produtos from '../models/produtos.mjs'; // Your Produtos model
import { Op } from 'sequelize';

const router = express.Router();

// Rota para buscar produtos por empresa
router.get('/:empresaId', async (req, res) => {
  const { empresaId } = req.params;

  if (!empresaId) {
    return res.status(400).json({ error: 'Empresa ID is required' });
  }

  try {
    // Fetch products by fornecedor_id (empresaId)
    const produtos = await Produtos.findAll({
      where: { fornecedor_id: empresaId },
    });

    return res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

// Rota para adicionar um novo produto
router.post('/', async (req, res) => {
  const { nome_produto, descricao, preco, estoque, categoria_id, fornecedor_id } = req.body;

  if (!nome_produto || !descricao || preco === undefined || estoque === undefined || !categoria_id || !fornecedor_id) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newProduct = await Produtos.create({
      nome_produto,
      descricao,
      preco,
      estoque,
      categoria_id,
      fornecedor_id,
    });

    return res.status(201).json(newProduct); // Return the created product
  } catch (error) {
    console.error('Error adding product:', error);
    return res.status(500).json({ error: 'Error adding product' });
  }
});

// Rota para buscar produtos de outras empresas (excluir empresaId especificado)
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
