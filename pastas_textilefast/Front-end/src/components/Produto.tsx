import { useNavigate } from 'react-router-dom';
import '../styles/Produto.css';

interface ProdutoProps {
    produto: {
        produto_id: number;
        nome_produto: string;
        preco: number | string;
        imagem_url: string;
    };
}

export function Produto({ produto }: ProdutoProps) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/produto/${produto.produto_id}`); // Atualizado para redirecionar corretamente
    };

    const precoNumerico = Number(produto.preco);

    return (
        <div onClick={handleClick} className="produto">
            <div>
                <img src={produto.imagem_url} alt={produto.nome_produto} width="90%" className="produto-img" />
            </div>
            <div>
                <h1>{produto.nome_produto}</h1>
            </div>
            <div>
                <h2>R$ {isNaN(precoNumerico) ? 'Preço inválido' : precoNumerico.toFixed(2)}</h2>
            </div>
        </div>
    );
}