import express from 'express';
import Empresas from '../models/empresas.mjs';
import { gerarSenhaAleatoria, gerarHashSenha } from '../utils/gerarSenha.mjs';
import bcrypt from 'bcrypt';

const router = express.Router();

// Cadastro Route (Create a new company)
router.post('/cadastro', async (req, res) => {
  const { cnpj, razao_social, nome_fantasia, tipo_empresa, email, telefone, reclameaqui, endereco } = req.body;

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
      reclameaqui,
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

// Login Route (Authenticate and return empresa data)
router.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  try {
    const empresa = await Empresas.findOne({ where: { email } });

    if (!empresa) {
      return res.status(404).json({ success: false, message: 'Empresa não encontrada!' });
    }

    // Valida a senha
    const senhaCorreta = await bcrypt.compare(senha, empresa.senha);
    if (!senhaCorreta) {
      return res.status(401).json({ success: false, message: 'Senha incorreta!' });
    }

    // Return empresa data (including the id)
    return res.status(200).json({
      success: true,
      message: 'Login realizado com sucesso!',
      empresa: {
        id: empresa.empresa_id, // Include the id
        email: empresa.email,
        razao_social: empresa.razao_social,
        nome_fantasia: empresa.nome_fantasia,
        tipo_empresa: empresa.tipo_empresa,
        telefone: empresa.telefone,
        senha: empresa.senha,
        reclameaqui: empresa.reclameaqui,
        endereco: empresa.endereco,
      },
    });
  } catch (error) {
    console.error('Erro no login Back-end:', error);
    return res.status(500).json({ success: false, message: 'Erro ao realizar login' });
  }
});

export default router;
