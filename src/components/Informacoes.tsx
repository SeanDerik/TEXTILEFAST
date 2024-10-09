import { Botaocomprar } from "./Botaocomprar";
import '../styles/Paginaproduto.css';
import '../styles/Botaocomprar.css';

export function Informacoes (){
    return(
        <>
            <div className="informacoes">
                <h1>NOME DO PRODUTO</h1>
                <h2>DESCRIÇÃO DO PRODUTO</h2>
                <h1>PREÇO</h1>
                <Botaocomprar />
            </div>
            
        </>
    );
}