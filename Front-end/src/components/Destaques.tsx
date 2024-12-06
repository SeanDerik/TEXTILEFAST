import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Destaques.css';

// Define a type for Produto
interface Produto {
  produto_id: number;
  nome_produto: string;
  descricao: string;
  preco: number;
  estoque: number;
}

const Destaques = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);  // Store products
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Store errors
  const empresaId = 3;  // Replace with the logged-in user's empresaId (use context or props)

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/destaques/excluir?empresaId=${empresaId}`);
        console.log('Fetched produtos:', response.data);  // Log the fetched products
        setProdutos(response.data);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products.');
      } finally {
        setLoading(false);
      }
    };
  
    fetchProdutos();
  }, [empresaId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(empresaId);

  return (
    <div>
      <h1>Produtos de Outras Empresas</h1>
      <div>
        {produtos.length === 0 ? (
          <p>No products found.</p>
        ) : (
          <ul>
            {produtos.map((produto) => (
              <li key={produto.produto_id}>
                <h2>{produto.nome_produto}</h2>
                <p>{produto.descricao}</p>
                <p>Price: ${produto.preco}</p>
                <p>Stock: {produto.estoque}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Destaques;
