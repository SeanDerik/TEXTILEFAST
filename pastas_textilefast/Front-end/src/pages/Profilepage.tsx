import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/ProfilePage.css'; 

const ProfilePage = () => {
  const [profileData, setProfileData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem('userToken');

      if (!token) {
        setError('Token não encontrado. Faça login.');
        return;
      }

      try {
        const response = await axios.get('http://localhost:3001/api/dataProfile/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data.empresa);
      } catch (err) {
        setError('Erro ao carregar os dados do perfil.');
        console.error(err);
      }
    };

    fetchProfileData();
  }, []);

  if (error) return <div className="error-message">{error}</div>;

  if (!profileData) return <div>Carregando...</div>;

  return (
    <div className="login-form-container">
      <div className="login-form">
        <h2>Perfil da Empresa</h2>
        <p><strong>CNPJ:</strong> {profileData.cnpj}</p>
        <p><strong>Razão Social:</strong> {profileData.razao_social}</p>
        <p><strong>Telefone:</strong> {profileData.telefone}</p>
        <p><strong>Tipo de Empresa:</strong> {profileData.tipo_empresa}</p>
        <p><strong>Data de Cadastro:</strong> {new Date(profileData.data_cadastro).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
