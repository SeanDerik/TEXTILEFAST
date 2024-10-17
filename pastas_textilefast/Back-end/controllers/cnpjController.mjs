import fetch from 'node-fetch';
import { validarCNPJ } from '../models/cnpjValida.mjs';

export const buscarCNPJ = async (req, res) => {
  const cnpj = req.params.cnpj;

  // Valida o CNPJ
  if (!validarCNPJ(cnpj)) {
    return res.status(400).json({ error: 'CNPJ inválido' });
  }

  try {
    const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    const data = await response.json();

    if (data.status === 'ERROR') {
      return res.status(404).json({ error: 'CNPJ não encontrado' });
    }

    res.json(data);
  } catch (error) {
    console.error('Erro ao buscar CNPJ:', error);
    res.status(500).json({ error: 'Erro ao buscar CNPJ' });
  }
};
