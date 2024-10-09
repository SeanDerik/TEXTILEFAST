import { Navbar } from "../components/Navbar";
import { Informacoes } from "../components/Informacoes";
import Placeholderimg from "../assets/placeholder.jpg";
import '../styles/Paginaproduto.css';
import '../styles/Botaocomprar.css';

export function Paginaproduto(){
    return(
        <>
            <Navbar />
            <div className="infoproduto">
                <div>
                    <img src={Placeholderimg} width="50%" className="placeholderimg"/>
                </div>
                <Informacoes />
            </div>
            
        </>
    )
}