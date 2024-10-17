import React, { useState } from 'react';
import '../styles/Cadastro.css';
import useCadastroEmpresa from '../hooks/ValidaCNPJ';

interface FormData {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  tipoEmpresa: 'comprador' | 'fornecedor';
  telefone: string;
  endereco: string;
}

// Componente de cadastro
const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    tipoEmpresa: '',
    telefone: '',
    endereco: '',
  });

  const [cnpjValido, setCnpjValido] = useState(true);
  const { cadastrarEmpresa, loading, error, success } = useCadastroEmpresa();

  // Função para buscar dados do CNPJ
  const buscarDadosCNPJ = async (cnpj: string) => {
    cnpj = cnpj.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cnpj.length !== 14) {
      alert('CNPJ inválido!');
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/api/cnpj/${cnpj}`);
      const data = await response.json();

      console.log('Resposta da API:', data); // Log da resposta da API

      if (data.status === 'ERROR') {
        alert('CNPJ não encontrado!');
        return;
      }

      // Preenchendo dados da API no formulário
      setFormData((prevData) => ({
        ...prevData,
        razaoSocial: data.nome,
        nomeFantasia: data.fantasia,
        telefone: data.telefone,
        endereco: `${data.logradouro}, ${data.municipio} - ${data.uf}`,
      }));
    } catch (error) {
      console.error('Erro ao buscar o CNPJ:', error);
      alert('Erro ao buscar CNPJ!');
    }
  };

  // Validador de CNPJ ao perder foco
  const handleCNPJBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const cnpj = e.target.value;
    if (validarCNPJ(cnpj)) {
      setCnpjValido(true); // CNPJ válido
      buscarDadosCNPJ(cnpj); // Chama a API ao perder o foco do campo CNPJ
    } else {
      setCnpjValido(false); // CNPJ inválido
    }
  };

  // Função para atualizar o estado do formulário
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!cnpjValido) {
      alert('CNPJ inválido!');
      return;
    }

    // Cadastrando a empresa
    await cadastrarEmpresa(formData);
  };

  return (
    <div className="cadastro-container">
      <header className="header">
        <h1>Textilefast</h1>
      </header>
      <div className="cadastro-content">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} className="cadastro-form">
          <div className="form-group">
            <label htmlFor="cnpj">CNPJ</label>
            <input
              type="text"
              id="cnpj"
              name="cnpj"
              value={formData.cnpj}
              onChange={handleChange}
              onBlur={handleCNPJBlur} // Chama a função ao perder o foco do campo
              required
            />
            {!cnpjValido && <span className="error-text">CNPJ inválido!</span>}
          </div>

          {/* Outros campos preenchidos automaticamente pela API */}
          <div className="form-group">
            <label htmlFor="razaoSocial">Razão Social</label>
            <input
              type="text"
              id="razaoSocial"
              name="razaoSocial"
              value={formData.razaoSocial}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="cadastro-button" disabled={loading}>
            {loading ? 'Cadastrando...' : 'Registrar'}
          </button>

          {error && <span className="error-text">{error}</span>}
          {success && <span className="success-text">Empresa cadastrada com sucesso!</span>}
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
