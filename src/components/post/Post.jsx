import React from "react";
import { Link } from "react-router-dom";
import "./post.scss";

const Post = ({ post }) => {
  const PF = "http://localhost:8000/images/";
  return (
    <div className="post">
      <img
        className="postImg"
        src={PF + post?.photo ? PF + post?.photo : "/assets/post.jpg"}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((cat) => {
            return <span className="postCat">{cat.name}</span>;
          })}
        </div>
        <Link className="link" to={`/?user=${post.username}`}>
          <span className="postUser">From {post.username}</span>
        </Link>
        <Link className="link" to={`/post/${post._id}`}>
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
