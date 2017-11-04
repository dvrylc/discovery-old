// External imports 
import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>
          <Link to="/">Discovery</Link>
        </h1>

        <Link to="/about">?</Link>
      </header>
    );
  }
}

export default Header;
