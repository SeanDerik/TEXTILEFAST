import { Produto } from "./Produto";
import '../styles/Destaques.css';

interface DestaquesProps {
    produtos: { produtos: any[] }; // Ajustado para receber o objeto
}

export function Destaques({ produtos }: DestaquesProps) {
    const listaProdutos = Array.isArray(produtos.produtos) ? produtos.produtos : [];

    if (listaProdutos.length === 0) {
        console.error("A lista de produtos está vazia ou inválida:", produtos);
        return <p>Erro: Não foi possível carregar os produtos.</p>;
    }

    return (
        <section className="destaques">
            <h3 className="promocao-titulo">EM PROMOÇÃO!</h3>
            <section className="section">
                {listaProdutos.slice(0, 4).map((produto) => (
                    <Produto key={produto.produto_id} produto={produto} />
                ))}
            </section>
            <section className="section">
                {listaProdutos.slice(4, 8).map((produto) => (
                    <Produto key={produto.produto_id} produto={produto} />
                ))}
            </section>
        </section>
    );
}
