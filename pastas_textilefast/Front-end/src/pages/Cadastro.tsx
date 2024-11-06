import React, { useState } from 'react';
import '../styles/Cadastro.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Textilefastlogo from "../assets/textilefastlogo.png";

interface FormData {
  nome: string;
  cnpj: string;
  endereco: string;
  cidade: string;
  estado: string;
  telefone: string;
  tipo_empresa: string;
  email: string;
  razao_social: string;
  qualidade: string;
  condicoesFinanceiras: string;
  pontualidade: string;
  prazoEntrega: string;
  comentario: string;
}

const CadastroFornecedor: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cnpj: '',
    endereco: '',
    cidade: '',
    estado: '',
    telefone: '',
    tipo_empresa: '',
    email: '',
    razao_social: '',
    qualidade: '',
    condicoesFinanceiras: '',
    pontualidade: '',
    prazoEntrega: '',
    comentario: ''
  });

  const [tipoUsuario, setTipoUsuario] = useState('');
  const navigate = useNavigate();

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setTipoUsuario(value);
    setFormData((prevData) => ({
      ...prevData,
      tipo_empresa: value
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/empresas/cadastro', formData);

      if (response.status === 201) {
        console.log('Empresa cadastrado com sucesso:', response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Erro ao cadastrar o Empresa Front-end:', error);
    }
  };

  return (
    <>
    <img src={Textilefastlogo} width="20%" className="littlelogo" alt="Textile Fast Logo" />
    <div className="cadastro-container">
      <h2>Cadastro de Fornecedor</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome:
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </label>

        <label>CNPJ:
          <input type="text" name="cnpj" value={formData.cnpj} onChange={handleChange} required />
        </label>

        <label>Endereço:
          <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
        </label>

        <label>Cidade:
          <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />
        </label>

        <label>Razão Social:
          <input type="text" name="razao_social" value={formData.razao_social} onChange={handleChange} required />
        </label>

        <label>Estado:
          <input type="text" name="estado" value={formData.estado} onChange={handleChange} required />
        </label>

        <label>Telefone:
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </label>

        <label>Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>Tipo de Usuário:
          <select name="tipo_empresa" value={tipoUsuario} onChange={handleDropdownChange} required>
            <option value="">Selecione</option>
            <option value="comprador">Comprador</option>
            <option value="fornecedor">Fornecedor</option>
          </select>
        </label>

        <p>Tipo selecionado: {tipoUsuario}</p>
        <button type="submit">Cadastrar Fornecedor</button>
      </form>
    </div>
    </>
  );
};

export default CadastroFornecedor;
