import Placeholderimg from "../assets/placeholder.jpg";
import '../styles/Produto.css';

export function Produto(){
    return(
        <div className="produto">
            <div>
                <img src={Placeholderimg} width="90%" className="placeholderimg"/>
            </div>
            <div>
                <h1>PRODUCT NAME</h1>
            </div>
            <div>
                <h2>PRICE</h2>
            </div>
        </div>    
    )
}