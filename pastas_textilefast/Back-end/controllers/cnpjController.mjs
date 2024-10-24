import axios from 'axios';

export const buscarCNPJ = async (req, res) => {
  const { cnpj } = req.params;

  try {
    const response = await axios.get(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);
    const data = response.data;

    if (data.status === 'ERROR') {
      return res.status(404).json({ message: 'CNPJ não encontrado!' });
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar CNPJ:', error);
    return res.status(500).json({ error: 'Erro ao buscar CNPJ' });
  }
};
