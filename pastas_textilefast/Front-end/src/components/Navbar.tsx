import { Homebutton } from "./Homebutton";
import { Catalogbutton } from "./Catalogbutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

export function Navbar() {
    const navigate = useNavigate();  // Para navegação

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');  // Redireciona para login após logout
    };

    const goToProfile = () => {
        navigate('/profile');  // Redireciona para a página de perfil
    };

    return (
        <>
            <img src={Textilefastlogo} width="20%" className="littlelogo" alt="Textile Fast Logo" />
            <nav className="navbar">
                <div className="buttons">
                    <Homebutton />
                    <Catalogbutton />
                    {/* Botão de Perfil */}
                    <button className="profileButton" onClick={goToProfile}>Perfil</button>
                    {/* Botão de Logout */}
                    <button className="logoutButton" onClick={handleLogout}>Logout</button>
                </div>
            </nav>
        </>
    );
}
