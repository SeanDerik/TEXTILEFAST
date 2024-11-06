import { Nome } from "../components/Nome";
import { NotaRA } from "./NotaRA";
import { Descricao } from "./Descricao";

export function Info() {
    return(
        
        <div className="profileinfo">
            <Nome />
            <Descricao />
            <NotaRA />
        </div>
    );
    

}