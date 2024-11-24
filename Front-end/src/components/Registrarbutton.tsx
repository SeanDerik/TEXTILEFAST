import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export function Registrarbutton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/cadastro');
    };

    return (
        <button onClick={handleClick} className='create-account-button'>Registrar</button>
    );
}