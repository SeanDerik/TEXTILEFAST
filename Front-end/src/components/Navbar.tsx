import { Homebutton } from "./Homebutton";
import { Profilebutton } from "./Profilebutton";
import { Logoutbutton } from "./Logoutbutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';


export function Navbar() {

    return (
        <>
            <img src={Textilefastlogo} width="20%" className="littlelogo" alt="Textile Fast Logo" />
            <nav className="navbar">
                <div className="button">
                    <Homebutton />
                    <Logoutbutton />
                    <Profilebutton />
                </div>
            </nav>
        </>
    );
}
