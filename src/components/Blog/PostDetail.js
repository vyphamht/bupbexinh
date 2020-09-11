import React, { useState, useEffect } from "react";
import { db } from "../../constant/firebaseConfig";
import { useParams } from "react-router-dom";

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
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <a href="/blog">Go back</a>
      <p>This is detail</p>
      <div>
        <img src={postDetail.img} alt="dance" style={{ width: "100%" }} />
        <span className="card-title">{postDetail.title}</span>
        <h6>{postDetail.author}</h6>

        <div className="card-content">
          <p>{postDetail.content}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
