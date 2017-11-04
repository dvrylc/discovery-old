// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';

class ArticleList extends React.Component {
  // Constructor
  constructor() {
    super();
    
    // Initial state
    this.state = {
      articles: []
    }
  }

  // Lifecycle
  componentDidMount() {
    // Fetch articles
    api.fetchArticles()
      .then(raw => raw.json())
      .then(res => {
        this.setState({
          articles: res
        });

        console.log('Initial fetch complete.')
      })
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div>articles</div>
    );
  }
}

// Export
export default ArticleList;
