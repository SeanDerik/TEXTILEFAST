import { Produto } from "./Produto"
import '../styles/Destaques.css';


export function Destaques(){
    return(
        <section className="destaques">
            <h3 className="promocao-titulo">EM PROMOÇÃO!</h3>   
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