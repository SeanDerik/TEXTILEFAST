import express from 'express';
import Fornecedores from '../models/empresas.mjs';

const router = express.Router();

router.get('/fornecedor/:empresa_id', async (req, res) => {
  try {
    const { empresa_id } = req.params;

    const fornecedor = await Fornecedores.findOne({ where: { empresa_id: empresa_id } });
    console.log("pesquisando fornecedores Fornecedores.mjs")

    if (!fornecedor) {
      return res.status(404).json({ error: 'Fornecedor não encontrado.' });
    }
    console.log("enviando os dados para o front ")
    return res.status(200).json({
      fornecedor: {
        empresa_id: fornecedor.empresa_id,
        razao_social: fornecedor.razao_social,
        cnpj: fornecedor.cnpj,
        telefone: fornecedor.telefone,
        endereco: fornecedor.endereco,
        data_cadastro: fornecedor.data_cadastro,
        reclameaqui: fornecedor.reclameaqui,
      },
      
    });
  } catch (error) {
    console.error('Erro ao buscar fornecedor:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar dados do fornecedor.' });
  }
});

export default router;
