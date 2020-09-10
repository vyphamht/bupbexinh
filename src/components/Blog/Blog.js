import { db } from "../../constant/firebaseConfig";

import React, { useState, useEffect } from "react";

const Blog = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = db.collection("blog-post").onSnapshot((snapshot) => {
      const allPost = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPost(allPost);
    });
    // return () => {
    //   console.log("loading");
    //   getPost();
    // };
  }, []);
  console.log(post);
  return <div>this is blog page</div>;
};

export default Blog;
