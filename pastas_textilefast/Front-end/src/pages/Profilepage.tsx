import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Profile.css';

const Profile: React.FC = () => {
  const [empresa, setEmpresa] = useState<any>(null);
  const [produtos, setProdutos] = useState<any[]>([]);
  const [isFornecedor, setIsFornecedor] = useState(false);
  const [editingProdutoId, setEditingProdutoId] = useState<number | null>(null);
  const [editingProduto, setEditingProduto] = useState<any>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const getToken = () => localStorage.getItem('userToken');

  const formatPrice = (preco: any) => {
    const precoNumber = Number(preco);
    return isNaN(precoNumber) ? 'Preço inválido' : `R$ ${precoNumber.toFixed(2)}`;
  };

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = getToken();
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
      if (isFornecedor) {
        try {
          const response = await axios.get('http://localhost:3001/api/produtos/produtos', {
            headers: { Authorization: `Bearer ${getToken()}` },
          });
          setProdutos(response.data);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
        }
      }
    };

    fetchProdutos();
  }, [isFornecedor]);

  const handleDelete = async (produto_id: number) => {
    try {
      const response = await axios.delete(`http://localhost:3001/api/produtos/produtos/${produto_id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      if (response.status === 200) {
        setProdutos((prevProdutos) =>
          prevProdutos.filter((produto) => produto.produto_id !== produto_id)
        );
      }
    } catch (error) {
      console.error('Erro ao excluir produto:', error);
    }
  };

  const handleEdit = (produto: any) => {
    setEditingProdutoId(produto.produto_id);
    setEditingProduto(produto);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditingProduto((prevProduto: any) => ({ ...prevProduto, [name]: value }));
  };

  const handleConfirmEdit = async () => {
    try {
      console.log('Atualizando produto:', editingProduto);
      const response = await axios.put(
        `http://localhost:3001/api/produtos/produtos/${editingProdutoId}`,
        editingProduto,
        {
          headers: { Authorization: `Bearer ${getToken()}` },
        }
      );
      console.log('Resposta da API:', response);
      if (response.status === 200) {
        const produtoAtualizado = response.data.produto;
        console.log('Produto atualizado com sucesso:', produtoAtualizado);

        setProdutos((prevProdutos) =>
          prevProdutos.map((produto) =>
            produto.produto_id === editingProdutoId ? produtoAtualizado : produto
          )
        );
        setEditingProdutoId(null);
        setEditingProduto({});
      }
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setSelectedImage(file);
    }
  };

  const handleImageUpload = async (produtoId: number) => {
    if (!selectedImage) {
      console.log('Nenhuma imagem selecionada');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await axios.post('http://localhost:3001/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${getToken()}`,
        },
      });
      console.log('Arquivo enviado com sucesso', response);

      const updatedProduto = { ...editingProduto, imagem_url: response.data.file.filename };
      setEditingProduto(updatedProduto);

      await handleConfirmEdit();
    } catch (error) {
      console.error('Erro ao enviar arquivo:', error);
    }
  };

  if (!empresa) {
    return <div>Carregando...</div>;
  }

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => navigate('/home')}>
          <span>Textilefast</span>
        </div>
        <ul className="navbar-menu">
          <li onClick={() => navigate('/catalogpage')}>Catálogo</li>
          <li onClick={() => navigate('/login')}>Logout</li>
        </ul>
      </nav>

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
                    {editingProdutoId === produto.produto_id ? (
                      <div>
                        <label>
                          <strong>Nome do Produto:</strong>
                          <input
                            type="text"
                            name="nome_produto"
                            value={editingProduto.nome_produto || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          <strong>Descrição:</strong>
                          <input
                            type="text"
                            name="descricao"
                            value={editingProduto.descricao || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          <strong>Preço:</strong>
                          <input
                            type="number"
                            name="preco"
                            value={editingProduto.preco || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <label>
                          <strong>Estoque:</strong>
                          <input
                            type="number"
                            name="estoque"
                            value={editingProduto.estoque || ''}
                            onChange={handleChange}
                          />
                        </label>
                        <div>
                          <strong>Imagem do Produto:</strong>
                          <input type="file" onChange={handleImageChange} />
                          {selectedImage && <p>Imagem selecionada: {selectedImage.name}</p>}
                          <button onClick={() => handleImageUpload(produto.produto_id)}>Upload Imagem</button>
                        </div>
                        <button onClick={handleConfirmEdit}>Salvar</button>
                        <button onClick={() => setEditingProdutoId(null)}>Cancelar</button>
                      </div>
                    ) : (
                      <div>
                        <h3>{produto.nome_produto}</h3>
                        <p>
                          <strong>Descrição:</strong> {produto.descricao}
                        </p>
                        <p>
                          <strong>Preço:</strong> {formatPrice(produto.preco)}
                        </p>
                        <p>
                          <strong>Estoque:</strong> {produto.estoque}
                        </p>
                        <p>
                          <strong>Categoria ID:</strong> {produto.categoria_id}
                        </p>
                        <p>
                          <strong>Data de Cadastro:</strong>{' '}
                          {new Date(produto.data_cadastro).toLocaleDateString()}
                        </p>
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
                        <button onClick={() => handleEdit(produto)}>Editar</button>
                        <button onClick={() => handleDelete(produto.produto_id)}>Excluir</button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum produto cadastrado.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
