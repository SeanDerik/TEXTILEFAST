import { Homebutton } from "./Homebutton";
import { Catalogbutton } from "./Catalogbutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';


export function Navbar (){
    return(
        <><img src={Textilefastlogo} width="20%" className="littlelogo"/>
        <nav className="navbar">
            <div className="buttons">
                <Homebutton />
                <Catalogbutton />
            </div>
        </nav>
        </>
    );
}