import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
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
    tipo_empresa: string;
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

    const token = localStorage.getItem('userToken');

    useEffect(() => {
        const headers = new Headers();
        if (token) {
            headers.append('Authorization', `Bearer ${token}`);
        }

        fetch(`http://localhost:3001/api/produtos/produtos/${produto_id}`, {
            method: 'GET',
            headers: headers,
        })
            .then((res) => res.json())
            .then((data) => {
                setProduto(data);

                if (data.categoria_id) {
                    fetch(`http://localhost:3001/api/categorias/categorias`)
                        .then((res) => res.json())
                        .then((categorias) => {
                            const categoriaEncontrada = categorias.find(
                                (categoria: Categoria) => categoria.categoria_id === data.categoria_id
                            );
                            setCategoria(categoriaEncontrada || null);
                        })
                        .catch((error) => console.error("Erro ao carregar categoria:", error));
                }

                fetch(`http://localhost:3001/api/dataProfile/profile`, {
                    method: 'GET',
                    headers: headers,
                })
                    .then((res) => res.json())
                    .then((data) => {
                        setFornecedor(data.empresa);
                    })
                    .catch((error) => console.error("Erro ao carregar dados do fornecedor:", error));

                fetch(`http://localhost:3001/api/produtos/produtos?fornecedor_id=${data.fornecedor_id}`, {
                    method: 'GET',
                    headers: headers,
                })
                    .then((res) => res.json())
                    .then((produtos) => setProdutosFornecedor(produtos))
                    .catch((error) => console.error("Erro ao carregar produtos do fornecedor:", error));
            })
            .catch((error) => console.error("Erro ao carregar produto:", error));
    }, [produto_id, token]);

    if (!produto || !categoria || !fornecedor) {
        return <div>Carregando...</div>;
    }

    const precoFormatado = !isNaN(Number(produto.preco)) ? Number(produto.preco).toFixed(2) : 'Preço inválido';

    return (
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

            <div className="produtos-do-fornecedor">
                <h3>Produtos do Fornecedor:</h3>
                <ul>
                    {produtosFornecedor.map((prod) => (
                        <li key={prod.produto_id}>
                            <Link to={`/produto-detalhes/${prod.produto_id}`}>{prod.nome_produto}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
