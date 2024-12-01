import express from 'express';
import Empresas from '../models/empresas.mjs';

const router = express.Router();

router.post('/cadastro', async (req, res) => {
  const { cnpj, razao_social, nome_fantasia, tipo_empresa, email, telefone, endereco, senha } = req.body; // A senha vem diretamente do corpo da requisição

  try {
    const novaEmpresa = await Empresas.create({
      cnpj,
      razao_social,
      nome_fantasia,
      tipo_empresa,
      email,
      telefone,
      endereco,
      senha, // Armazenando a senha em texto simples
    });

    return res.status(201).json({
      message: 'Empresa cadastrada com sucesso!',
      empresa: novaEmpresa,
      senhaGerada: senha, // Retornando a senha gerada sem criptografia
    });
  } catch (error) {
    console.error('Erro ao cadastrar empresa Back-end:', error);
    return res.status(500).json({ error: 'Erro ao cadastrar empresa' });
  }
});

export default router;
