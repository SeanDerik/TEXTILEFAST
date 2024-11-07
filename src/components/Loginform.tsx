import React, { useState } from 'react';
import '../styles/Loginform.css';

const Loginform: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add login logic here
  };

  const handleCreateAccount = () => {
    console.log("Redirect to create account page");
    // Add logic to redirect to create account page
  };

  return (
    <div className="login-form-container">
      <div className="logo-container">
        <img src="/path/to/your/logo.png" alt="Logo" className="logo" />
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="login-button">Login</button>
      </form>
      <button onClick={handleCreateAccount} className="create-account-button">
        Create Account
      </button>
    </div>
  );
};

export default Loginform;
