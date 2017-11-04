// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import Header from './Header';
import ArticleList from './ArticleList';

// Component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />

        <Route path="/" component={ ArticleList } />
      </div>
    );
  }
}

// Export
export default App;
