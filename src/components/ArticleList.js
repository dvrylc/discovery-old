// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';
import ArticleLink from './ArticleLink';

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
    // Fetch articles then update state
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
    // If articles are not loaded yet
    if (this.state.articles.length === 0) {
      return (
        <main>Loading...</main>
      );
    }

    const articleLinkList = this.state.articles.map((article, index) => {
      return <ArticleLink article={article} key={index} />
    });

    return (
      <main>{articleLinkList}</main>
    );
  }
}

// Export
export default ArticleList;
