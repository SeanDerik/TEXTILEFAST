import { Link } from 'react-router-dom'; 
import { Homebutton } from "./Homebutton";
import { Profilebutton } from "./Profilebutton";
import { Logoutbutton } from "./Logoutbutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-logo">
          <Link to="/home">
            <img src={Textilefastlogo} alt="Textile Fast Logo" width="120" />
          </Link>
        </div>
        <div className="navbar-buttons">
          <Homebutton />
          <Profilebutton />
          <Logoutbutton />
        </div>
      </div>
    </nav>
  );
}
