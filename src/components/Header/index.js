import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';
import logo from 'src/assets/images/favicon.png';

const Header = () => (

  <div className="header">
    <img src={logo} alt="" className="header--logo" />
    <Link to="/">
      <h1 className="header--title">Punchline Guesser</h1>
    </Link>
  </div>

);

export default Header;
