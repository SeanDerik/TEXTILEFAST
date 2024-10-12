import { Homebutton } from "./Homebutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';

export function Navbar (){
    return(
        <><img src={Textilefastlogo} width="20%" className="littlelogo"/>
        <nav className="navbar">
            <div className="buttons">
                <Homebutton />
                
            </div>
        </nav>
        </>
    );
}