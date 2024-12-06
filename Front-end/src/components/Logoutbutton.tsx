import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export function Logoutbutton() {
    const navigate = useNavigate(); 

    const handleClick = () => {
        navigate('/'); 
    };

    return (
        <button onClick={handleClick} className='button'>
            Logout
        </button>
    );
}