import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from 'src/assets/images/favicon.png';

const Header = ({ user, logout }) => (

  <div className="header">
    <img src={logo} alt="website logo" className="header--logo" width="26px" height="26px" />
    <Link to="/">
      <h1 className="header--title">Punchline Guesser</h1>
    </Link>
    {user && user.role === 'admin' ? (
      <>
        <Link to="/admin" className="header-dashboard">
          <p>Dashboard</p>
        </Link>
        <Link to="/" onClick={logout}>
          Déconnexion
        </Link>
      </>
    ) : null}
  </div>

);

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func.isRequired,
};

export default Header;
