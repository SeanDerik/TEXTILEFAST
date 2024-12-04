import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile: React.FC = () => {
  const [empresa, setEmpresa] = useState<any>(null);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [isFornecedor, setIsFornecedor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('userToken');

      if (!token) {
        console.error('Token não encontrado. Faça login.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/dataProfile/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const empresaData = response.data.empresa;
        setEmpresa(empresaData);
        setIsFornecedor(empresaData.tipo_empresa === 'fornecedor');
      } catch (err) {
        console.error('Erro ao carregar os dados da empresa:', err);
      }
    };

    fetchProfileData();
  }, []);

  useEffect(() => {
    const fetchProdutos = async () => {
      if (isFornecedor && empresa) {
        try {
          const response = await axios.get(
            `http://localhost:3001/api/produtos/${empresa.id}`,
            {
              headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
            }
          );
          setProdutos(response.data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      }
    };
    fetchProdutos();
  }, [isFornecedor, empresa]);

  const handleDelete = async (produto_id: number) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/api/produtos/${produto_id}`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
        }
      );
      if (response.status === 200) {
        setProdutos((prevProdutos) =>
          prevProdutos.filter((produto) => produto.produto_id !== produto_id)
        );
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  if (!empresa) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>{empresa.nome_fantasia}</h1>
        <p>{empresa.razao_social}</p>
        <p>{empresa.email}</p>
        <p>{empresa.telefone}</p>
        <p>{empresa.endereco}</p>
        <p>{empresa.tipo_empresa}</p>

        {isFornecedor && (
          <button className="create-product-button" onClick={() => navigate('/adicionar-produto')}>
            Criar Produto
          </button>
        )}
      </div>

      {isFornecedor && (
        <div className="products-section">
          <h2>Produtos Cadastrados</h2>
          {produtos.length > 0 ? (
            <ul className="product-list">
              {produtos.map((produto) => (
                <li key={produto.produto_id} className="product-item">
                  <div>
                    <h3>{produto.nome_produto}</h3>
                    <p><strong>Descrição:</strong> {produto.descricao}</p>
                    <p><strong>Preço:</strong> R$ {produto.preco.toFixed(2)}</p>
                    <p><strong>Estoque:</strong> {produto.estoque}</p>
                    <p><strong>Categoria ID:</strong> {produto.categoria_id}</p>
                    <p><strong>Data de Cadastro:</strong> {new Date(produto.data_cadastro).toLocaleDateString()}</p>
                  </div>
                  <div className="product-actions">
                    <button className="edit-button">Editar</button>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(produto.produto_id)}
                    >
                      Excluir
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Você ainda não tem produtos cadastrados.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
