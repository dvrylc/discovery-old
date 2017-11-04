// External imports 
import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <h1>Discovery</h1>
        </Link>

        <p>A cutting-edge Hacker News reader</p>

        <Link to="/about">?</Link>
      </nav>
    );
  }
}

export default Nav;
