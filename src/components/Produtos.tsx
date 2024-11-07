import { Produto } from "../components/Produto"
import '../styles/produto.css';


export function Produtos(){
    return(
        <section className="destaques">
            <h3 className="promocao-titulo">A VENDA</h3>   
            <section className="section">
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </section>
            
            <section className="section">
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </section>

            <section className="section">
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </section>

            <section className="section">
                <Produto />
                <Produto />
                <Produto />
                <Produto />
            </section>
        </section>    
    )
}