import React from "react";
import "./BlogPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import { useRouteMatch, Link } from "react-router-dom";

const BlogPage = ({ post }) => {
  let match = useRouteMatch();

  return (
    <div key={post.id}>
      <div style={{ maxWidth: "400px" }} className="card">
        <div className="card-image">
          <img src={post.img} alt="dance" style={{ width: "100%" }} />
          <span className="card-title">{post.title}</span>
          <h6>{post.author}</h6>
        </div>
        <div className="card-content">
          <p>{post.content}</p>
        </div>
        <div className="buttons">
          <Link to={`${match.url}/${post.id}`} type="button">
            Xem Thêm
          </Link>

          <Link to="#" type="button">
            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "1.2rem" }} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
