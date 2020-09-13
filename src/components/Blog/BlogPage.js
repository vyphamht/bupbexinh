import React from "react";
import "./BlogPage.css";

import { useRouteMatch, Link } from "react-router-dom";

const BlogPage = ({ post }) => {
  let match = useRouteMatch();

  return (
    <div key={post.id}>
      <div style={{ maxWidth: "400px" }} className="card">
        <div className="card-image">
          <img src={post.img} alt="Alps" style={{ width: "100%" }} />
          <span className="card-title">{post.title}</span>
          <h6>{post.author}</h6>
        </div>
        <div className="card-content">
          <p>{post.content}</p>
        </div>
        <Link to={`${match.url}/${post.id}`} type="button">
          View More
        </Link>
      </div>
    </div>
  );
};

export default BlogPage;
