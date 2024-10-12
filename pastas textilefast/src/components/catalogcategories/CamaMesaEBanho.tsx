import { Produto } from "../Produto"
import '../../styles/Destaques.css';



export function CamaMesaEBanho(){
    return(
        <section className="destaques">
            <h3 className="promocao-titulo">CAMA, MESA E BANHO</h3>   
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