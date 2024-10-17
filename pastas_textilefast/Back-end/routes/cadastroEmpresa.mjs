import express from 'express';
import Empresas from '../models/empresas.mjs';

const router = express.Router();
router.post('/', async (req, res) => {
  const { cnpj, razao_social, nome_fantasia, tipo_empresa, email, telefone, endereco } = req.body;

  try {
    const novaEmpresa = await Empresas.create({
      cnpj,
      razao_social,
      nome_fantasia,
      tipo_empresa,
      email,
      telefone,
      endereco,
    });

    return res.status(201).json(novaEmpresa);
  } catch (error) {
    console.error('Erro ao cadastrar empresa:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar empresa' });
  }
});

export default router;
