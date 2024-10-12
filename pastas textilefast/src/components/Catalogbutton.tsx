import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

export function Catalogbutton() {
    const navigate = useNavigate(); // Hook to navigate between routes

    const handleClick = () => {
        navigate('/catalogpage');
    };

    return (
        <button onClick={handleClick} className='button'>
            Catalog
        </button>
    );
}