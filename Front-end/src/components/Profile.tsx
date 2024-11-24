import React, { useEffect, useState } from 'react';
import '../styles/Profile.css';

const Profile: React.FC = () => {
  const [empresa, setEmpresa] = useState<any>(null);

  useEffect(() => {
    const storedEmpresa = localStorage.getItem('empresa');
    if (storedEmpresa) {
      setEmpresa(JSON.parse(storedEmpresa));
    }
  }, []);

  if (!empresa) {
    return <div>Loading...</div>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        
        <p><h1>{empresa.nome_fantasia}</h1></p>
        <p>{empresa.razao_social}</p>
        <p>{empresa.email}</p>
        <p>{empresa.telefone}</p>
        <p>{empresa.endereco}</p>
        <p>{empresa.tipo_empresa}</p>
      </div>
    </div>
  );
};

export default Profile;
