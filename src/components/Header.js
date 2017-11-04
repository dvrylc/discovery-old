// External imports 
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">
          <h1>Discovery</h1>
        </Link>

        <p>A cutting-edge Hacker News reader</p>

        <Link to="/about">?</Link>
      </header>
    );
  }
}

export default Header;
