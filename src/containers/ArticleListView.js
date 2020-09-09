import React, { Component } from "react";
import axios from "axios";

import Articles from "../components/Articles/Articles";

class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get(`http://djreact-blog.herokuapp.com/api/`).then((res) => {
      this.setState({
        articles: res.data,
      });
      console.log(res.data);
    });
  }
  render() {
    return <Articles data={this.state.articles} />;
  }
}

export default ArticleList;
