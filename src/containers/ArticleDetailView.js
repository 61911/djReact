import React, { Component } from "react";
import axios from "axios";

import Article from "../components/Articles/Article/Article";
import CustomForm from "../components/Create/Form/Form";

class ArticleDetailView extends Component {
  state = {
    article: {},
  };

  componentDidMount() {
    const articleID = this.props.match.params.articleID;
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      this.setState({
        article: res.data,
      });
    });
  }
  render() {
    return (
      <div>
        <Article
          id={this.state.article.id}
          author={this.state.article.author}
          title={this.state.article.title}
          content={this.state.article.content}
          date_posted={this.state.article.date_posted}
          image={this.state.article.image}
        />
        <CustomForm
          requestType="put"
          articleID={this.props.match.params.articleID}
        />
      </div>
    );
  }
}

export default ArticleDetailView;
