import { useState } from 'react';

const useValidarCNPJ = () => {
  const [error, setError] = useState<string | null>(null);

  const validarCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14) return false;
    return true; // Validação básica somente pelo comprimento aqui
  };

  const buscarDadosCNPJ = async (cnpj: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/cnpj/${cnpj}`);
      const data = await response.json();

      if (data.status === 'ERROR') {
        setError('CNPJ não encontrado!');
        return null;
      }

      return data; // Retornar os dados buscados
    } catch (error) {
      setError('Erro ao buscar CNPJ!');
      return null;
    }
  };

  return { validarCNPJ, buscarDadosCNPJ, error };
};

export default useValidarCNPJ;
