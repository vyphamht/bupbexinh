import React, { useState, useEffect } from "react";
import { db } from "../../constant/firebaseConfig";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import BlogPage from "./BlogPage";
import PostDetail from "./PostDetail";

const Blog = () => {
  let match = useRouteMatch();

  const [post, setPost] = useState([]);
  useEffect(() => {
    const getPost = db.collection("blog-post").onSnapshot((snapshot) => {
      const allPost = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPost(allPost);
    });
    return () => {
      getPost();
    };
  }, []);
  const posts = post.map((data) => <BlogPage key={data.id} post={data} />);

  return (
    <div>
      <Switch>
        <Route exact path={match.path}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {posts}
          </div>
        </Route>
        <Route exact path={`/blog/:postId`}>
          <PostDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default Blog;
