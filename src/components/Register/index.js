import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from 'src/config';
import './register.scss';

const Register = () => {
  const [error, setError] = useState(null);

  const history = useHistory();

  const handleSignup = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post(`${baseURL}/signup`, data)
      .then((res) => {
        if (res.status !== 200) {
          console.log(res);
          setError(res.data);
        }
        else {
          setError(null);
          history.push('/');
        }
      });
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSignup}>
        <h2>Inscription</h2>
        <div className="login-form-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Adresse email" required />
        </div>
        <div className="login-form-field">
          <label htmlFor="username">Pseudo</label>
          <input name="username" type="text" placeholder="Nom d'utilisateur" required />
        </div>
        <div className="login-form-field">
          <label htmlFor="password">Mot de passe</label>
          <input name="password" type="password" placeholder="mot de passe" required />
        </div>
        <div className="login-form-field">
          <label htmlFor="passwordConfirm">Confirmation du mot de passe</label>
          <input name="passwordConfirm" type="password" placeholder="mot de passe" required />
        </div>
        {error && (
          <div className="form-error">{error}</div>
        )}
        <button type="submit" className="quizz-button">Valider</button>
      </form>
    </div>
  );
};

export default Register;
