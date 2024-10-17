// hooks/useValidarCNPJ.ts
import { useState } from 'react';

const useValidarCNPJ = () => {
  const [cnpjValido, setCnpjValido] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const validarCNPJ = (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, '');
    if (cnpj.length !== 14) {
      setCnpjValido(false);
      return false;
    }
    setCnpjValido(true);
    return true;
  };

  const buscarDadosCNPJ = async (cnpj: string) => {
    try {
      const response = await fetch(`http://localhost:3001/api/cnpj/${cnpj}`);
      const data = await response.json();

      if (data.status === 'ERROR') {
        setError('CNPJ não encontrado!');
        return null;
      }

      return data; // Retorna os dados da API
    } catch (error) {
      setError('Erro ao buscar CNPJ!');
      return null;
    }
  };

  return { cnpjValido, setCnpjValido, error, validarCNPJ, buscarDadosCNPJ };
};

export default useValidarCNPJ;
