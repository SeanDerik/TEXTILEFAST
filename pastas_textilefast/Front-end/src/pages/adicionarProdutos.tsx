import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { Navbar } from '../components/Navbar'; 
import Footer from '../components/Footer';
import '../styles/AddProduct.css';

const AdicionarProduto: React.FC = () => {
  const [nome_Produto, setnome_Produto] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [estoque, setEstoque] = useState('');
  const [categoriaId, setCategoriaId] = useState('');
  const [categorias, setCategorias] = useState<any[]>([]);
  const [imagem, setImagem] = useState<File | null>(null);
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/api/categorias/categorias')
      .then((response) => {
        setCategorias(response.data);
      })
      .catch((error) => {
        console.error('Erro ao carregar categorias', error);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome_Produto || !descricao || !preco || !estoque || !categoriaId || !imagem) {
      setErro('Preencha todos os campos');
      return;
    }

    if (isNaN(parseFloat(preco)) || isNaN(parseInt(estoque, 10))) {
      setErro('Preço e Estoque devem ser números válidos');
      return;
    }

    const token = localStorage.getItem('userToken');
    if (!token) {
      setErro('Token não encontrado');
      return;
    }

    const decodedToken: any = jwtDecode(token);
    console.log('Decoded Token:', decodedToken);
    const fornecedor_id = decodedToken.empresa_id;

    if (!fornecedor_id) {
      setErro('Fornecedor ID não encontrado no token');
      return;
    }

    const formData = new FormData();
    formData.append('nome_produto', nome_Produto);
    formData.append('descricao', descricao);
    formData.append('preco', parseFloat(preco).toString());
    formData.append('estoque', parseInt(estoque, 10).toString());
    formData.append('categoria_id', categoriaId);
    formData.append('fornecedor_id', fornecedor_id);

    if (imagem) {
      formData.append('imagem', imagem);
      console.log('Imagem adicionada ao FormData:', imagem);
    } else {
      console.log('Nenhuma imagem selecionada.');
    }

    try {
      const response = await axios.post(
        'http://localhost:3001/api/produtos/produtos',
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
      console.error('Erro ao adicionar produto:', error.response ? error.response.data : error.message);
      setErro('Erro ao adicionar produto');
    }
  };

  return (
    <div className="add-product-container">
      <Navbar />
      <h1>Adicionar Produto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome do Produto</label>
          <input
            type="text"
            value={nome_Produto}
            onChange={(e) => setnome_Produto(e.target.value)}
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
            onChange={(e) => {
              const selectedFile = e.target.files ? e.target.files[0] : null;
              setImagem(selectedFile);
              console.log('Imagem selecionada:', selectedFile);
            }}
          />
        </div>
        {erro && <p className="error">{erro}</p>}
        <button type="submit">Adicionar Produto</button>
      </form>
      <Footer />
    </div>
  );
};

export default AdicionarProduto;
