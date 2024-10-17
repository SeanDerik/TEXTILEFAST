import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export function Homebutton() {
    const navigate = useNavigate(); // Hook to navigate between routes

    const handleClick = () => {
        navigate('/home'); // Navigate to the "/home" route when clicked
    };

    return (
        <button onClick={handleClick} className='button'>
            Home
        </button>
    );
}