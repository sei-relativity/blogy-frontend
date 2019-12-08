import React from 'react';

class Article extends React.Component {
  deleteArticle = (e) => {
    e.preventDefault();
    this.props.deleteArticle(this.props.id);
  }

  render() {
    return (
      <div className="article">
        <h2>{this.props.title}</h2>
        <sub>{this.props.author}</sub>
        <p>
          {this.props.content}
        </p>
        <a href="#" onClick={this.deleteArticle}>Delete</a>
      </div>
    );
  }
}

export default Article;