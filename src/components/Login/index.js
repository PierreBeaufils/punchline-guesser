import React from 'react';
import PropTypes from 'prop-types';
import './login.scss';

const Login = ({
  email, password, changeFieldValue,
  handleLogin, error,
}) => {
  const handleChange = (event) => {
    changeFieldValue('login', event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="login-form-field">
          <label htmlFor="email">Email</label>
          <input name="email" type="email" placeholder="Adresse email" value={email} onChange={handleChange} required />
        </div>
        <div className="login-form-field">
          <label htmlFor="password">Mot de passe</label>
          <input name="password" type="password" placeholder="mot de passe" value={password} onChange={handleChange} required />
        </div>
        {error && (
          <div className="form-error">{error}</div>
        )}
        <button type="submit" className="quizz-button">Se connecter</button>
      </form>
    </div>
  );
};

Login.defaultProps = {
  error: null,
};

Login.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Login;
