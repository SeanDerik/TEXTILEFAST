import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Productincart';

// Define the interface for a product
interface ProductType {
  produto_id: number;
  nome_produto: string;
  descricao: string;
  preco: number;
  imagem: string;
}

const Cartpage = () => {
    const [products, setProducts] = useState<ProductType[]>([]); // Specify the type of 'products'

    useEffect(() => {
        const fetchCartProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/carrinho/cart');
                setProducts(response.data);  // Ensure the response matches the 'ProductType' structure
            } catch (error) {
                console.error('Error fetching cart products:', error);
            }
        };

        fetchCartProducts();
    }, []);

    return (
        <div>
            <h1>Your Cart</h1>
            {products.map((product) => (
                <Product key={product.produto_id} {...product} />
            ))}
        </div>
    );
};

export default Cartpage;
