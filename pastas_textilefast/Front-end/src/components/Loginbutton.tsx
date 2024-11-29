import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

export function Loginbutton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/loginform');
    };

    return (
        <button onClick={handleClick} className='login-button'>Login</button>
    );
}