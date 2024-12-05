import React, { useState } from 'react';
import '../styles/Cadastro.css';
import { useNavigate } from 'react-router-dom';
import useValidarCNPJ from '../hooks/ValidaCNPJ';
import axios from 'axios';

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
  termosAceitos: boolean;
}

const Cadastro: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    cnpj: '',
    razaoSocial: '',
    nomeFantasia: '',
    tipoEmpresa: 'comprador',
    telefone: '',
    endereco: '',
    termosAceitos: false,
  });

  const [cnpjValido, setCnpjValido] = useState(true);
  const [senhaValida, setSenhaValida] = useState(true);
  const { validarCNPJ, buscarDadosCNPJ, error } = useValidarCNPJ();
  const navigate = useNavigate();

  const handleCNPJBlur = async (e: React.FocusEvent<HTMLInputElement>) => {
    const cnpj = e.target.value;
    if (validarCNPJ(cnpj)) {
      setCnpjValido(true);
      const data = await buscarDadosCNPJ(cnpj);
      if (data) {
        setFormData({
          ...formData,
          razaoSocial: data.nome,
          nomeFantasia: data.fantasia,
          telefone: data.telefone,
          endereco: `${data.logradouro}, ${data.municipio} - ${data.uf}`,
          email: data.email,
        });
      }
    } else {
      setCnpjValido(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordValidation = () => {
    if (formData.senha !== formData.confirmarSenha) {
      setSenhaValida(false);
    } else {
      setSenhaValida(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!cnpjValido) {
      alert('CNPJ inválido!');
      return;
    }
    if (!senhaValida) {
      alert('As senhas não coincidem!');
      return;
    }
    if (!formData.termosAceitos) {
      alert('Você precisa aceitar os termos e condições!');
      return;
    }

    const dataToSubmit = {
      cnpj: formData.cnpj,
      razao_social: formData.razaoSocial,
      nome_fantasia: formData.nomeFantasia,
      tipo_empresa: formData.tipoEmpresa,
      email: formData.email,
      telefone: formData.telefone,
      endereco: formData.endereco,
      senha: formData.senha,
    };

    try {
      const response = await axios.post('http://localhost:3001/api/empresas/cadastro', dataToSubmit);

      if (response.status === 201) {
        navigate('/loginform');
      } else {
        alert(`Erro ao cadastrar empresa: ${response.data.error}`);
      }
    } catch (error) {
      console.error('Erro no cadastro:', error);
      alert('Erro no cadastro.');
    }
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
              onBlur={handleCNPJBlur}
              required
            />
            {!cnpjValido && <span className="error-text">CNPJ inválido!</span>}
            {error && <span className="error-text">{error}</span>}
          </div>

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
            <label htmlFor="tipoEmpresa">Tipo de Empresa</label>
            <select
              id="tipoEmpresa"
              name="tipoEmpresa"
              value={formData.tipoEmpresa}
              onChange={handleChange}
              required
            >
              <option value="comprador">Comprador</option>
              <option value="fornecedor">Fornecedor</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              onBlur={handlePasswordValidation}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarSenha">Confirmar Senha</label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              onBlur={handlePasswordValidation}
              required
            />
            {!senhaValida && <span className="error-text">As senhas não coincidem!</span>}
          </div>

          <div className="form-group termos-container">
            <label htmlFor="termos">
              Eu aceito os <a href="/termos">termos e condições</a>.
            </label>
            <input
              type="checkbox"
              id="termos"
              name="termosAceitos"
              checked={formData.termosAceitos}
              onChange={(e) => setFormData({ ...formData, termosAceitos: e.target.checked })}
              required
            />
          </div>

          <button type="submit" className="cadastro-button">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
