import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/Loginform.css"

const Loginform: React.FC = () => {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/login', {
        cnpj,
        senha: password,
      });

      const token = response.data.token;
      localStorage.setItem('userToken', token);

      console.log("Login bem-sucedido:", response.data);
      navigate('/home');
    } catch (error: any) {
      if (error.response) {
        setErrorMessage(error.response.data.error || 'Erro no login');
      } else {
        setErrorMessage('Erro ao conectar ao servidor');
      }
    }
  };

  return (
    <div className="unique-login-form-container">
      <form onSubmit={handleLogin} className="unique-login-form">
        <h2>Login</h2>
        <div className="unique-login-form-group">
          <label>
            CNPJ:
            <input
              type="text"
              value={cnpj}
              onChange={(e) => setCnpj(e.target.value)}
              required
              className="unique-login-input"
            />
          </label>
        </div>
        <div className="unique-login-form-group">
          <label>
            Senha:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="unique-login-input"
            />
          </label>
        </div>
        <button type="submit" className="unique-login-button">Login</button>
        {errorMessage && <p className="unique-login-error-message">{errorMessage}</p>}
      </form>
    </div>
  );  
};

export default Loginform;
