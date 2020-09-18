import React, { useState, useEffect } from "react";
import { db } from "../../constant/firebaseConfig";
import { useParams } from "react-router-dom";
import "./PostDetail.css";

const PostDetail = () => {
  const [postDetail, setPostDetail] = useState([]);
  let { postId } = useParams();
  useEffect(() => {
    const getPost = db.collection("blog-post").onSnapshot((snapshot) => {
      const allPost = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPostDetail(allPost.find((p) => p.id === postId));
    });
    return () => {
      getPost();
    };
  }, [postId]);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap" }}
      className="post-detail-page"
    >
      <div>
        <button className="btn go-back">
          <a href="/blog">Go back</a>
        </button>
      </div>
      <br />
      <div className="post-detail">
        <img src={postDetail.img} alt="dance" style={{ width: "100%" }} />{" "}
        <br />
        <span className="card-title">{postDetail.title}</span> <br />
        <h6>{postDetail.author}</h6>
        <div>
          {" "}
          <br />
          <p className="post-detail-content">{postDetail.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
