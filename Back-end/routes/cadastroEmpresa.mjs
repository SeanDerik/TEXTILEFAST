import express from 'express';
import Empresas from '../models/empresas.mjs';
import { gerarSenhaAleatoria, gerarHashSenha } from '../utils/gerarSenha.mjs';

const router = express.Router();

router.post('/cadastro', async (req, res) => {
  const { cnpj, razao_social, nome_fantasia, tipo_empresa, email, telefone, endereco } = req.body;

  try {
    const senhaAleatoria = gerarSenhaAleatoria();
    const senhaCriptografada = await gerarHashSenha(senhaAleatoria);
    const novaEmpresa = await Empresas.create({
      cnpj,
      razao_social,
      nome_fantasia,
      tipo_empresa,
      email,
      telefone,
      endereco,
      senha: senhaCriptografada,
    });
    return res.status(201).json({
      message: 'Empresa cadastrada com sucesso!',
      empresa: novaEmpresa,
      senhaGerada: senhaAleatoria, 
    });
  } catch (error) {
    console.error('Erro ao cadastrar empresa Back-end:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar empresa' });
  }
});

export default router;
