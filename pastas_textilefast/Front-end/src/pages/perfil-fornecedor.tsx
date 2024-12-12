import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

interface Produto {
  produto_id: number;
  nome_produto: string;
  descricao: string;
  preco: number | string; // preco can be string or number, for safety
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
}

const FornecedorProfile: React.FC = () => {
  const { empresa_id } = useParams<{ empresa_id: string }>();
  const [fornecedor, setFornecedor] = useState<Fornecedor | null>(null);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  const getToken = () => localStorage.getItem('userToken');

  useEffect(() => {
    const fetchFornecedorData = async () => {
      try {
        const token = getToken();
        if (!token) {
          console.error('Token não encontrado. Faça login.');
          return;
        }

        const response = await axios.get(`http://localhost:3001/api/dataProfile/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const empresaData = response.data.empresa;
        if (empresaData.empresa_id.toString() === empresa_id) {
          setFornecedor(empresaData);
        }

        if (empresaData.tipo_empresa === 'fornecedor') {
          const produtosResponse = await axios.get('http://localhost:3001/api/produtos/produtos', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setProdutos(produtosResponse.data);
        }
      } catch (err) {
        console.error('Erro ao carregar dados do fornecedor:', err);
      }
    };

    fetchFornecedorData();
  }, [empresa_id]);

  if (!fornecedor) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="fornecedor-profile">
      <h1>{fornecedor.razao_social}</h1>
      <p>CNPJ: {fornecedor.cnpj}</p>
      <p>Tipo de Empresa: {fornecedor.tipo_empresa}</p>
      <p>Telefone: {fornecedor.telefone}</p>
      <p>Endereço: {fornecedor.endereco}</p>
      <p>Data de Cadastro: {fornecedor.data_cadastro}</p>

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
                      style={{
                        maxWidth: '150px',
                        height: 'auto',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        marginTop: '10px',
                      }}
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
  );
};

export default FornecedorProfile;
