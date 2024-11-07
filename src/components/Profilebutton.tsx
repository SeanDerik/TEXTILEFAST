import { useNavigate } from 'react-router-dom';
import '../styles/Profilebutton.css';
import profilepic from "../assets/profilepic.png";

export function Profilebutton() {
    const navigate = useNavigate(); // Hook to navigate between routes

    const handleClick = () => {
        navigate('/profile'); // Navigate to the "/home" route when clicked
    };

    return (
        <button onClick={handleClick} className='profilebutton'>
            <img src={profilepic} width="10%" className="profilepic" alt="profilepic" />
        </button>
    );
}