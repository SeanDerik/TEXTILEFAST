import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // import useNavigate
import axios from 'axios';
import '../styles/FornecedorProfile.css';
import reclameAquiLogo from '../assets/reclame_aqui_logo.jpeg';

interface Produto {
  produto_id: number;
  nome_produto: string;
  descricao: string;
  preco: number | string;
  estoque: number;
  categoria_id: number;
  data_cadastro: string;
  imagem_url: string;
}

interface Fornecedor {
  empresa_id: number;
  razao_social: string;
  cnpj: string;
  tipo_empresa: string;
  telefone: string;
  endereco: string;
  data_cadastro: string;
  reclameaqui: string;
}

const FornecedorProfile: React.FC = () => {
  const { empresa_id } = useParams<{ empresa_id: string }>(); 
  const [fornecedor, setFornecedor] = useState<Fornecedor | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  const [error, setError] = useState<string | null>(null); 

  const getToken = () => localStorage.getItem('userToken');
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchFornecedorData = async () => {
      setLoading(true); 
      try {
        const token = getToken();
        if (!token) {
          console.error('Token não encontrado. Faça login.');
          setError('Token não encontrado. Faça login.');
          setLoading(false);
          return;
        }

        const fornecedorResponse = await axios.get(`http://localhost:3001/api/fornecedores/fornecedor/${empresa_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setFornecedor(fornecedorResponse.data.fornecedor);
        console.log(fornecedorResponse.data.fornecedor.reclameaqui);

        const produtosResponse = await axios.get(`http://localhost:3001/api/produtos/produtos?fornecedor_id=${empresa_id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProdutos(produtosResponse.data);
      } catch (err) {
        console.error('Erro ao carregar dados do fornecedor:', err);
        setError('Erro ao carregar dados. Tente novamente.');
      } finally {
        setLoading(false); 
      }
    };

    fetchFornecedorData();
  }, [empresa_id]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!fornecedor) {
    return <div>Fornecedor não encontrado.</div>;
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/home')}>
          <span>Textilefast</span>
        </div>
        <ul className="navbar-menu">
          <li onClick={() => navigate('/')}>Logout</li>
        </ul>
      </nav>

      <div className="fornecedor-profile">
        <h1>{fornecedor.razao_social}</h1>
        <p>CNPJ: {fornecedor.cnpj}</p>
        <p>Tipo de Empresa: {fornecedor.tipo_empresa}</p>
        <p>Telefone: {fornecedor.telefone}</p>
        <p>Endereço: {fornecedor.endereco}</p>
        <p>Data de Cadastro: {new Date(fornecedor.data_cadastro).toLocaleDateString()}</p>

        <a
          href={`https://www.reclameaqui.com.br/empresa/${fornecedor.reclameaqui ? fornecedor.reclameaqui.toLowerCase() : ''}`}
          target="_blank"
          rel="noopener noreferrer"
          className="reclame-aqui-button"
          onClick={() => console.log("Link clicado!")}
        >
          <img src={reclameAquiLogo} alt="Reclame Aqui Logo" className="reclame-aqui-logo" />
          Reclame Aqui
        </a>

        <div className="products-section">
          <h2>Produtos Cadastrados</h2>
          {produtos.length > 0 ? (
            <ul className="product-list">
              {produtos.map((produto) => (
                <li key={produto.produto_id} className="product-item">
                  <h3>{produto.nome_produto}</h3>
                  <p><strong>Descrição:</strong> {produto.descricao}</p>
                  <p>
                    <strong>Preço:</strong>
                    {typeof produto.preco === 'number'
                      ? `R$ ${produto.preco.toFixed(2)}`
                      : 'Preço inválido'}
                  </p>
                  <p><strong>Estoque:</strong> {produto.estoque}</p>
                  <p><strong>Categoria:</strong> {produto.categoria_id}</p>
                  <p><strong>Data de Cadastro:</strong> {new Date(produto.data_cadastro).toLocaleDateString()}</p>
                  {produto.imagem_url && (
                    <div className="product-image-preview">
                      <img
                        src={`${produto.imagem_url.replace(/\\/g, '/')}`}
                        alt={`Imagem do produto ${produto.nome_produto}`}
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>Nenhum produto cadastrado.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FornecedorProfile;
