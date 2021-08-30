import React from "react";
import Post from "../post/Post";
import "./posts.scss";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post) => {
        return <Post post={post} />;
      })}
    </div>
  );
};

export default Posts;
