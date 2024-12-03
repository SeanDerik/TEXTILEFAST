import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/AddProduct.css';

const AdicionarProduto: React.FC = () => {
  const [nomeProduto, setNomeProduto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [categorias, setCategorias] = useState<any[]>([]);
  const [imagem, setImagem] = useState<File | null>(null);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Puxa as categorias do backend
    axios.get('http://localhost:3001/api/categorias')
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar categorias", error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nomeProduto || !descricao || !preco || !estoque || !categoriaId || !imagem) {
      setErro('Preencha todos os campos');
      return;
    }

    const formData = new FormData();
    formData.append('nome_produto', nomeProduto);
    formData.append('descricao', descricao);
    formData.append('preco', preco);
    formData.append('estoque', estoque);
    formData.append('categoria_id', categoriaId);
    formData.append('imagem', imagem);

    const token = localStorage.getItem('userToken');
    if (!token) {
      setErro('Token não encontrado');
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/produtos',
        formData,
        {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.status === 201) {
        alert('Produto adicionado com sucesso!');
        navigate('/profile');
      }
    } catch (error) {
      console.error('Erro ao adicionar produto:', error);
      setErro('Erro ao adicionar produto');
    }
  };

  return (
    <div className="add-product-container">
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto</label>
          <input
            type="text"
            value={nomeProduto}
            onChange={(e) => setNomeProduto(e.target.value)}
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
        </div>
        <div>
          <label>Estoque</label>
          <input
            type="number"
            value={estoque}
            onChange={(e) => setEstoque(e.target.value)}
          />
        </div>
        <div>
          <label>Categoria</label>
          <select
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
          >
            <option value="">Selecione uma Categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.categoria_id} value={categoria.categoria_id}>
                {categoria.nome_categoria}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Imagem</label>
          <input
            type="file"
            onChange={(e) => setImagem(e.target.files ? e.target.files[0] : null)}
          />
        </div>
        {erro && <p className="error">{erro}</p>}
        <button type="submit">Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AdicionarProduto;
