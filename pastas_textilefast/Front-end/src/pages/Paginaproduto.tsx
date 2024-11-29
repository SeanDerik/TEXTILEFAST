import { useState } from 'react';
import { Navbar } from "../components/Navbar";
import Placeholderimg from "../assets/placeholder.jpg";
import '../styles/Paginaproduto.css';
import '../styles/Botaocomprar.css';
import axios from 'axios';

export function Paginaproduto() {
    const [product] = useState({
        produto_id: 1,
        nome_produto: 'Example Product',
        descricao: 'This is an example description of the product.',
        preco: 50.00,
        estoque: 100,
        fornecedor_id: 10,
        categoria_id: 5,
        data_cadastro: '2024-11-16'
    });

    const [quantidade, setQuantidade] = useState(1);

    const handleBuyClick = async () => {
        try {
            const comprador_id = 1;  // Assuming this is the logged-in buyer's ID

            const response = await axios.post('http://localhost:3001/api/carrinho/addcarrinho', {
                comprador_id,
                produto_id: product.produto_id,
                quantidade
            });

            console.log('Product added to cart:', response.data);
        } catch (error) {
            console.error('Error adding product to the cart:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="placeholderimg">
                    <img src={Placeholderimg} width={200} alt={product.nome_produto} />
                </div>
                <div className="informacoes">
                    <h1>{product.nome_produto}</h1>
                    <p>{product.descricao}</p>
                    <h2>Preço: R$ {product.preco.toFixed(2)}</h2>
                    <p>Estoque disponível: {product.estoque}</p>
                </div>
                <div className="quantity-selector">
                    <label htmlFor="quantity">Quantidade:</label>
                    <input
                        type="number"
                        id="quantity"
                        min="1"
                        max={product.estoque}
                        value={quantidade}
                        onChange={(e) => setQuantidade(Number(e.target.value))}
                    />
                </div>
                <button onClick={handleBuyClick} className='buy-button'>
                    ADICIONAR AO CARRINHO
                </button>
            </div>
        </>
    );
}

export default Paginaproduto;
