import express from 'express';
import Produtos from '../models/produtos.mjs'; // Importe o modelo de produtos

const router = express.Router();

// Rota para buscar produtos por empresa
router.get('/produtos/:empresaId', async (req, res) => {
  const { empresaId } = req.params;

  if (!empresaId) {
    return res.status(400).json({ error: 'Empresa ID is required' });
  }

  try {
    // Use o modelo Produtos para buscar os produtos pelo fornecedor_id
    const produtos = await Produtos.findAll({
      where: { fornecedor_id: empresaId },
    });

    // Retorne os produtos encontrados
    return res.status(200).json(produtos);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

export default router;
