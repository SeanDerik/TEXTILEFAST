import React from 'react';

// Define the interface for the props
interface ProductProps {
  nome_produto: string;
  descricao: string;
  preco: number;
  imagem: string;
}

// Use the interface for the component's props
const Productincart: React.FC<ProductProps> = ({ nome_produto, descricao, preco, imagem }) => {
  return (
    <div className="product">
      <img src={imagem || 'default-image.jpg'} alt={nome_produto} width={200} />
      <h2>{nome_produto}</h2>
      <p>{descricao}</p>
      <p>Price: R$ {preco.toFixed(2)}</p>
    </div>
  );
};

export default Productincart;
