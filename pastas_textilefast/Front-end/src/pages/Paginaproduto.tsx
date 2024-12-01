import { Navbar } from "../components/Navbar";
import { Informacoes } from "../components/Informacoes";
import Placeholderimg from "../assets/placeholder.jpg";
import '../styles/Paginaproduto.css';
import '../styles/Botaocomprar.css';

export function Paginaproduto() {
    return (
        <>
        <Navbar />
        <div className="container">
            <div className="placeholderimg">
                <img src={Placeholderimg} alt="Product" />
            </div>
            <div className="informacoes">
            <Informacoes />
            </div>
        </div>
        </>
    );
}

export default Paginaproduto;
