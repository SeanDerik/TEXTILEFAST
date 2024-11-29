import { useNavigate } from 'react-router-dom';
import Placeholderimg1 from "../assets/placeholder1.jpg";
import Placeholderimg2 from "../assets/placeholder2.jpg";
import Placeholderimg3 from "../assets/placeholder3.jpg";
import Placeholderimg4 from "../assets/placeholder4.jpg";
import Placeholderimg5 from "../assets/placeholder5.jpg";
import Placeholderimg6 from "../assets/placeholder6.jpg";
import Placeholderimg7 from "../assets/placeholder7.jpg";
import Placeholderimg8 from "../assets/placeholder8.jpg";
import Placeholderimg9 from "../assets/placeholder9.jpg";
import Placeholderimg10 from "../assets/placeholder10.jpg";
import Placeholderimg11 from "../assets/placeholder11.jpg";
import Placeholderimg12 from "../assets/placeholder12.jpg";
import '../styles/Produto.css';

export function Produto() {
    const navigate = useNavigate();

    // Array of image paths
    const images = [Placeholderimg1, Placeholderimg2, Placeholderimg3, Placeholderimg4, Placeholderimg5, Placeholderimg6,
        Placeholderimg7, Placeholderimg8, Placeholderimg9,
        Placeholderimg10, Placeholderimg11, Placeholderimg12,];
    
    // Select a random image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];

    const handleClick = () => {
        navigate('/product-page');
    };

    return (
        <div onClick={handleClick} className="produto">
            <div>
                <img src={randomImage} width="90%" className="placeholderimg" />
            </div>
            <div>
                <h1>PRODUCT NAME</h1>
            </div>
            <div>
                <h2>PRICE</h2>
            </div>
        </div>
    );
}
