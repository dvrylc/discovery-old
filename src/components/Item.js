// External imports
import React from 'react';

// Internal imports
import api from '../utilities/api';

class Item extends React.Component {
  // Constructor
  constructor() {
    super()

    // Initial state
    this.state = {
      comments: []
    }
  }

  // Lifecycle
  componentDidMount() {
    api.fetchItem(this.props.location.state.article.id)
      .then(raw => raw.json())
      .then(res => {
        this.setState({
          comments: res.comments
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const item = this.props.location.state.article;

    // Render comments
    let comments;
    if (this.state.comments.length === 0) {
      comments = (
        <section>
          Loading...
        </section>
      );
    } else {
      comments = this.state.comments.map((comment, index) => {
        return <div className="comment" dangerouslySetInnerHTML={{ __html: comment.content }} />;
      });
    }

    return (
      <main class="item">
        <article>
          <span>{item.user} | {item.time_ago}</span>

          <h1>
            <a href={item.url}>{item.title}</a>
          </h1>
        </article>

        { comments }
      </main>
    );
  }
}

// Export
export default Item;
