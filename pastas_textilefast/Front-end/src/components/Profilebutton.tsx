import { useNavigate } from 'react-router-dom';
import '../styles/Profilebutton.css';
import profilepic from "../assets/profilepic.png";

export function Profilebutton() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/profile');
    };

    return (
        <button onClick={handleClick} className='profilebutton'>
            <img src={profilepic}  className="profilepic" alt="profilepic" />
        </button>
    );
}