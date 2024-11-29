import React, { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(''); // Clear any previous error messages

    try {
      const response = await axios.post('http://localhost:3001/api/empresas/login', { email, senha });
    
      if (response.data.success) {
        const empresa = response.data.empresa; // Get empresa data
        localStorage.setItem('empresa', JSON.stringify(empresa)); // Save to localStorage
        alert('Login realizado com sucesso!');
        navigate('/profile'); // Redirect to the profile page
    }
    
    } catch (err) {
      console.error('Erro durante login:', err);
      setError('Erro no servidor. Tente novamente mais tarde.');
    }    
  };

  return (
    <div className="login-container">
      <header className="header">
        <h1>Textilefast</h1>
      </header>
      <div className="login-content">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="senha">Senha</label>
            <input
              type="senha"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          {error && <p className="error-text">{error}</p>}

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
