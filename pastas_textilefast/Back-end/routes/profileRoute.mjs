import express from 'express';
import Empresas from '../models/empresas.mjs';
import verifyToken from '../utils/authMiddleware.js';

const router = express.Router();

router.get('/profile', verifyToken, async (req, res) => {
  try {
    const empresaId = req.empresa.empresa_id;  // Acesso aos dados do token (empresa_id)

    const empresa = await Empresas.findOne({ where: { empresa_id: empresaId } });

    if (!empresa) {
      return res.status(404).json({ error: 'Empresa não encontrada.' });
    }

    return res.status(200).json({
      empresa: {
        empresa_id: empresa.empresa_id,
        cnpj: empresa.cnpj,
        razao_social: empresa.razao_social,
        tipo_empresa: empresa.tipo_empresa,
        telefone: empresa.telefone,
        endereco: empresa.endereco,
        data_cadastro: empresa.data_cadastro,
      },
    });
  } catch (error) {
    console.error('Erro ao buscar dados da empresa:', error);
    return res.status(500).json({ error: 'Erro interno ao buscar os dados da empresa.' });
  }
});

export default router;
