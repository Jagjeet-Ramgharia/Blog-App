import axios from "../../axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./singlepost.scss";
import { AuthContext } from "../../context/Context";

const SinglePost = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState("");
  const PF = "http://localhost:8000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [path]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/posts/ ${post._id}`, {
        data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setUpdateMode(true);
  };
  return (
    <div className="singlePost">
      <div className="wrapper">
        <img
          className="postImg"
          src={post.photo ? PF + post.photo : "/assets/header.jpg"}
          alt=""
        />
        <h1 className="title">
          {post.title}
          {post.username === user?.username && (
            <div className="editContainer">
              <i className="icon far fa-edit" onClick={handleEdit}></i>
              <i className="icon far fa-trash-alt" onClick={handleDelete}></i>
            </div>
          )}
        </h1>
        <div className="infoContainer">
          <span className="author">
            Author:
            <Link className="link" to={`/?user=${post.username}`}>
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="desc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
