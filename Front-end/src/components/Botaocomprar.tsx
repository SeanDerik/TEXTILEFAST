import { useNavigate } from 'react-router-dom';
import '../styles/Botaocomprar.css';

export function Botaocomprar (){
    const navigate = useNavigate(); // Hook to navigate between routes

    const handleClick = () => {
        navigate('/carrinho'); // Navigate to the "/home" route when clicked
    };

    return(
        <>
            <button onClick={handleClick} className='buy-button'>
                ADICIONAR AO CARRINHO
            </button> 
        </>
    );
}