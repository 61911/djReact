import React from "react";
import Article from "./Article/Article";

const Articles = (props) =>
  props.data.map((item) => {
    return (
      <Article
        key={item.id}
        author={item.author}
        title={item.title}
        content={item.content}
        date_posted={item.date_posted}
        image={item.image}
      />
    );
  });
export default Articles;
