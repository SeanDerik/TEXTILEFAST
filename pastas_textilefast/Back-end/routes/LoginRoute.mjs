import express from 'express';
import jwt from 'jsonwebtoken';
import Empresas from '../models/empresas.mjs';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { cnpj, senha } = req.body;
  if (!cnpj || !senha) {
    return res.status(400).json({ error: 'CNPJ e senha são obrigatórios!' });
  }
  try {
    const empresa = await Empresas.findOne({ where: { cnpj } });
    if (!empresa) {
      return res.status(404).json({ error: 'Empresa não encontrada com esse CNPJ.' });
    }
    if (empresa.senha !== senha) {
      return res.status(401).json({ error: 'Senha incorreta.' });
    }
    const token = jwt.sign(
      { empresa_id: empresa.empresa_id, cnpj: empresa.cnpj },
      'seu-segredo-aqui',
      { expiresIn: '1h' }
    );

    return res.status(200).json({
      message: 'Login bem-sucedido!',
      token,
      empresa: {
        empresa_id: empresa.empresa_id,
        cnpj: empresa.cnpj,
        razao_social: empresa.razao_social,
        tipo_empresa: empresa.tipo_empresa,
        email: empresa.email,
        telefone: empresa.telefone,
        endereco: empresa.endereco,
      },
    });
  } catch (error) {
    console.error('Erro ao autenticar empresa:', error);
    return res.status(500).json({ error: 'Erro interno ao tentar autenticar a empresa.' });
  }
});

export default router;
