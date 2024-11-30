import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';

const Profile: React.FC = () => {
  const [empresa, setEmpresa] = useState<any>(null);
  const [produtos, setProdutos] = useState<any[]>([]); // Store the products

  useEffect(() => {
    const storedEmpresa = localStorage.getItem('empresa');
    if (storedEmpresa) {
      const parsedEmpresa = JSON.parse(storedEmpresa);
      setEmpresa(parsedEmpresa);

      // Debugging: Check if 'id' is present in parsedEmpresa
      console.log(parsedEmpresa); // Ensure 'id' is there

      // Fetch products by empresa_id (Ensure 'id' exists)
      if (parsedEmpresa.id) {
        fetch(`http://localhost:3001/api/produtos/${parsedEmpresa.id}`)
          .then((response) => response.json())
          .then((data) => setProdutos(data))
          .catch((error) => console.error('Error fetching products:', error));
      } else {
        console.error('Empresa ID is missing');
      }
    }
  }, []);

  if (!empresa) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>{empresa.nome_fantasia}</h1>
        <p>{empresa.razao_social}</p>
        <p>{empresa.email}</p>
        <p>{empresa.telefone}</p>
        <p>{empresa.endereco}</p>
        <p>{empresa.tipo_empresa}</p>
      </div>

      {/* Render each product as a card */}
      <div className="products-container">
        {produtos.length > 0 ? (
          produtos.map((produto) => (
            <div key={produto.produto_id} className="product-card">
              <h2>{produto.nome_produto}</h2>
              <p>Price: {produto.preco}</p>
              <p>Stock: {produto.estoque}</p>
              <p>{produto.descricao}</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
