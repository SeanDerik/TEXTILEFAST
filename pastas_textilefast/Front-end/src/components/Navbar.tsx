import { Homebutton } from "./Homebutton";
import { Catalogbutton } from "./Catalogbutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();  // Substitui useHistory por useNavigate

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');  // Usa navigate ao invés de history.push
    };

    return (
        <>
            <img src={Textilefastlogo} width="20%" className="littlelogo" alt="Textile Fast Logo" />
            <nav className="navbar">
                <div className="buttons">
                    <Homebutton />
                    <Catalogbutton />
                    <button className="logoutButton" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </>
    );
}
