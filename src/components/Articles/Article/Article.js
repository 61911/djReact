import React from "react";
import { Link } from "react-router-dom";

import "./Article.css";
const article = (props) => {
  return (
    <article class="media content-section">
      <img
        src={props.image}
        alt="not found"
        class="rounded-circle article-img"
      />
      <div class="media-body">
        <div class="article-metadata">
          <Link class="mr-2" to="#" style={{ color: "black" }}>
            {props.author}
          </Link>
          <small class="text-muted">{props.date_posted}</small>
        </div>
        <h2>
          <Link to={`/articles/${props.id}`}>{props.title}</Link>
        </h2>
        <p class="article-content">{props.content}</p>
      </div>
    </article>
  );
};

export default article;
