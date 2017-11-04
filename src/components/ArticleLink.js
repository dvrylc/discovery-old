// External imports
import React from 'react';

class ArticleLink extends React.Component {
  render() {
    return (
      <article>
        <span>{this.props.article.user} | {this.props.article.time_ago}</span>

        <h1>{this.props.article.title}</h1>

        <span>
          <i className="fa fa-caret-up" aria-hidden="true"></i>  {this.props.article.points} <i className="fa fa-commenting-o" aria-hidden="true"></i> {this.props.article.comments_count}
        </span>
      </article>
    );
  }
}

// Export 
export default ArticleLink;
