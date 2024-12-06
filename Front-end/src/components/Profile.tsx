import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';

interface Product {
  nome_produto: string;
  descricao: string;
  preco: number;
  estoque: number;
  categoria_id: number;
}

const Profile: React.FC = () => {
  const [empresa, setEmpresa] = useState<any>(null);
  const [produtos, setProdutos] = useState<any[]>([]); // Store the products
  const [showProductForm, setShowProductForm] = useState<boolean>(false); // Toggle form visibility
  const [newProduct, setNewProduct] = useState<Product>({
    nome_produto: '',
    descricao: '',
    preco: 0,
    estoque: 0,
    categoria_id: 1, // Assuming a default category
  });

  useEffect(() => {
    const storedEmpresa = localStorage.getItem('empresa');
    if (storedEmpresa) {
      const parsedEmpresa = JSON.parse(storedEmpresa);
      setEmpresa(parsedEmpresa);

      console.log(parsedEmpresa);  // Debugging the parsed data

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prev: Product) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const storedEmpresa = localStorage.getItem('empresa');
    const parsedEmpresa = storedEmpresa ? JSON.parse(storedEmpresa) : null;

    if (parsedEmpresa) {
      const productData = {
        ...newProduct,
        fornecedor_id: parsedEmpresa.id, // Using the empresa ID as the fornecedor_id
      };

      // Send the new product to the backend
      fetch('http://localhost:3001/api/produtos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      })
        .then((response) => response.json())
        .then((data) => {
          setProdutos((prev) => [...prev, data]);
          setShowProductForm(false); // Hide the form after submission
          setNewProduct({
            nome_produto: '',
            descricao: '',
            preco: 0,
            estoque: 0,
            categoria_id: 1,
          }); // Reset the form fields
        })
        .catch((error) => console.error('Error adding product:', error));
    }
  };

  if (!empresa) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-and-reclameaqui">
        <div className="profile-card">
          <h1>{empresa.nome_fantasia}</h1>
          <p>{empresa.razao_social}</p>
          <p>{empresa.email}</p>
          <p>{empresa.telefone}</p>
          <p>{empresa.endereco}</p>
          <p>{empresa.tipo_empresa}</p>
        </div>
        
        {empresa.reclameaqui && (
          <div className="reclameaqui-card">
            <a href={empresa.reclameaqui} target="_blank" rel="noopener noreferrer">
            <img src="https://tekimobile.com/wp-content/uploads/2021/08/reclame-aqui-uma-das-melhores-plataformas.jpg" width={300} alt="ralogo" />
            <p>Visit our ReclameAqui for customer feedback and ratings.</p>
            </a>
          </div>
        )}
      </div>

      {/* Button to toggle the product form */}
      <button onClick={() => setShowProductForm(!showProductForm)} className="add-product-btn">
        {showProductForm ? 'Cancel' : 'Add New Product'}
      </button>

      {/* Conditional rendering of the product form */}
      {showProductForm && (
        <form onSubmit={handleFormSubmit} className="product-form">
          <h3>Add New Product</h3>
          <label htmlFor="nome_produto">Product Name</label>
          <input
            type="text"
            id="nome_produto"
            name="nome_produto"
            value={newProduct.nome_produto}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="descricao">Description</label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={newProduct.descricao}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="preco">Price</label>
          <input
            type="number"
            id="preco"
            name="preco"
            value={newProduct.preco}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="estoque">Stock</label>
          <input
            type="number"
            id="estoque"
            name="estoque"
            value={newProduct.estoque}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="categoria_id">Category</label>
          <input
            type="number"
            id="categoria_id"
            name="categoria_id"
            value={newProduct.categoria_id}
            onChange={handleInputChange}
            required
          />

          <button type="submit">Add Product</button>
        </form>
      )}

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
