import React from 'react';
import { getAllArticles, deleteArticleByID } from '../api';
import Article from './article';

class Articles extends React.Component {
  componentDidMount() {
    getAllArticles()
      .then((response) => {
        this.props.setArticles(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteArticle = (id) => {
    deleteArticleByID(id)
      .then((response) => {
        const newArticlesList = this.props.articles.filter((article) => {
          return article._id !== id;
        });

        this.props.setArticles(newArticlesList);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let allArticles = <h2>No Articles</h2>;

    if (this.props.articles.length > 0) {
      allArticles = this.props.articles.map((article, index) => {
        return <Article title={article.title}
                        author={article.author}
                        content={article.content}
                        id={article._id}
                        deleteArticle={this.deleteArticle}
                        key={index} />;
      });
    }

    return allArticles;
  }
}

export default Articles;