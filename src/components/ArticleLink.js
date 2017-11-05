// External imports
import React from 'react';
import { Link } from 'react-router-dom';

class ArticleLink extends React.Component {
  render() {
    const url = '/item/' + this.props.article.id;

    return (
      <article>
        <span>{this.props.article.user} | {this.props.article.time_ago}</span>

        <h1>
          <a href={this.props.article.url}>{this.props.article.title}</a>
        </h1>

        <span>
          <Link to={{ pathname: url, state: { article: this.props.article }}}>
            <i className="fa fa-caret-up" aria-hidden="true"></i>  {this.props.article.points}

            <i className="fa fa-commenting-o" aria-hidden="true"></i> {this.props.article.comments_count}
          </Link>
        </span>
      </article>
    );
  }
}

// Export
export default ArticleLink;
