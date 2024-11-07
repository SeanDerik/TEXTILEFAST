import { Homebutton } from "./Homebutton";
import { Catalogbutton } from "./Catalogbutton";
import Textilefastlogo from "../assets/textilefastlogo.png";
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';  // Para os ícones do Bootstrap

export function Navbar({ cartItemsCount }) {
    const navigate = useNavigate();  // Para navegação

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        navigate('/login');  // Redireciona para login após logout
    };

    const goToProfile = () => {
        navigate('/profile');  // Redireciona para a página de perfil
    };

    const goToCart = () => {
        navigate('/cart');  // Redireciona para o carrinho de compras
    };

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src={Textilefastlogo} className="logo" alt="Textile Fast Logo" />
            </div>
            <div className="navbar-center">
                <Homebutton className="button" />
                <Catalogbutton className="button" />
                <button className="button" onClick={goToProfile}>Perfil</button>
            </div>
            <div className="navbar-right">
                {/* Ícone de Carrinho de Compras */}
                <div className="cartButton" onClick={goToCart}>
                    <i className="bi bi-cart4"></i>
                    {cartItemsCount > 0 && (
                        <span className="badge">{cartItemsCount}</span>
                    )}
                </div>
                <button className="button logoutButton" onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}
