import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from 'src/assets/images/favicon.png';

const Header = ({ user }) => (

  <div className="header">
    <img src={logo} alt="" className="header--logo" />
    <Link to="/">
      <h1 className="header--title">Punchline Guesser</h1>
    </Link>
    {user && (
      <p>{user.username}</p>
    )}
  </div>

);

Header.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Header;
