// External imports
import React from 'react';
import { Route } from 'react-router-dom';

// Internal imports
import Header from './Header';
import ArticleList from './ArticleList';
import Item from './Item';

// Component
class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />

        <Route exact path="/" component={ ArticleList } />
        <Route path="/item/:id" component={ Item } />
      </div>
    );
  }
}

// Export
export default App;
