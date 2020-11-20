import React from 'react';
import { Link } from 'react-router-dom';
import '../design/header.scss';

function Header() {
  return (
    <header>
      <h1>RESTy</h1>
      <ul className="nav">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/history">
          <li>History</li>
        </Link>
        <Link to="/aboutUs">
          <li>Help</li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
