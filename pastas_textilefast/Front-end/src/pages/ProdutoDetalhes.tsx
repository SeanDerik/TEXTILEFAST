import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProdutoDetalhes.css';

interface Produto {
    produto_id: number;
    nome_produto: string;
    descricao: string;
    preco: number;
    estoque: number;
    imagem_url: string;
    categoria_id: number;
    fornecedor_id: number;
}

interface Categoria {
    categoria_id: number;
    nome_categoria: string;
}

interface Fornecedor {
    empresa_id: number;
    razao_social: string;
    cnpj: string;
    telefone: string;
    endereco: string;
    data_cadastro: string;
}

export function ProdutoDetalhes() {
    const { produto_id } = useParams<{ produto_id: string }>();
    const [produto, setProduto] = useState<Produto | null>(null);
    const [categoria, setCategoria] = useState<Categoria | null>(null);
    const [fornecedor, setFornecedor] = useState<Fornecedor | null>(null);
    const [produtosFornecedor, setProdutosFornecedor] = useState<Produto[]>([]);
    const navigate = useNavigate();

    const token = localStorage.getItem('userToken');

    useEffect(() => {
        const headers = token ? { Authorization: `Bearer ${token}` } : {};

        // Requisição do produto
        axios.get(`http://localhost:3001/api/produtos/produtos/${produto_id}`, { headers })
            .then((response) => {
                const data = response.data;
                setProduto(data);
                console.log("Produto recebido:", data);

                // Requisição do fornecedor
                axios.get(`http://localhost:3001/api/fornecedores/fornecedor/${data.fornecedor_id}`, { headers })
                    .then((fornecedorResponse) => {
                        console.log("Fornecedor recebido:", fornecedorResponse.data);
                        setFornecedor(fornecedorResponse.data.fornecedor);
                    });

                // Requisição para produtos do fornecedor
                axios.get(`http://localhost:3001/api/produtos/produtos?fornecedor_id=${data.fornecedor_id}`, { headers })
                    .then((produtosResponse) => {
                        setProdutosFornecedor(produtosResponse.data);
                    });

                // Requisição da categoria
                if (data.categoria_id) {
                    axios.get(`http://localhost:3001/api/categorias/categorias`)
                        .then((categoriasResponse) => {
                            const categoriaEncontrada = categoriasResponse.data.find(
                                (categoria: Categoria) => categoria.categoria_id === data.categoria_id
                            );
                            setCategoria(categoriaEncontrada || null);
                        });
                }
            })
            .catch((error) => {
                console.error('Erro ao buscar os dados do produto:', error);
            });
    }, [produto_id, token]);

    if (!produto || !categoria || !fornecedor) {
        return <div>Carregando...</div>;
    }

    const precoFormatado = !isNaN(Number(produto.preco)) ? Number(produto.preco).toFixed(2) : 'Preço inválido';

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

            <div className="produto-detalhes">
                <img src={produto.imagem_url} alt={produto.nome_produto} className="produto-detalhes-img" />
                <h1>{produto.nome_produto}</h1>
                <p>{produto.descricao}</p>
                <h2>R$ {precoFormatado}</h2>
                <p>Estoque: {produto.estoque}</p>
                <p><strong>Categoria:</strong> {categoria.nome_categoria}</p>

                <div className="fornecedor-info">
                    <h3>Fornecedor: <Link to={`/fornecedor-profile/${fornecedor.empresa_id}`}>{fornecedor.razao_social}</Link></h3>
                    <p>CNPJ: {fornecedor.cnpj}</p>
                    <p>Telefone: {fornecedor.telefone}</p>
                    <p>Endereço: {fornecedor.endereco}</p>
                    <p>Data de Cadastro: {fornecedor.data_cadastro}</p>
                </div>


                <button className="comprar-button" onClick={() => navigate(`/simular-compra/${produto.produto_id}`, { state: { preco: produto.preco,estoque: produto.estoque, endereco: fornecedor.endereco } })} >
                    Comprar
                </button>
            </div>
        </div>
    );
}
