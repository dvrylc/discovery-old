// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

// Internal imports
import App from './components/App'

// Styles
import './styles/index.css'

// Render
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
