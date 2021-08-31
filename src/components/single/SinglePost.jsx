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
  const [updateMode, setUpdateMode] = useState(false);
  const PF = "http://localhost:8000/images/";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("/posts/" + path);
        setPost(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
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
  const _handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        username: user.username,
        title,
        desc,
      });
      setUpdateMode(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="singlePost">
      <div className="wrapper">
        {post.photo && (
          <img className="postImg" src={PF + post?.photo} alt="" />
        )}
        {updateMode ? (
          <input
            className="title_input"
            type="text"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className="title">
            {title}
            {post.username === user?.username && (
              <div className="editContainer">
                <i
                  className="icon far fa-edit"
                  onClick={() => setUpdateMode(true)}
                ></i>
                <i className="icon far fa-trash-alt" onClick={handleDelete}></i>
              </div>
            )}
          </h1>
        )}

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
        {updateMode ? (
          <textarea
            className="desc_input"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="desc">{desc}</p>
        )}
        {updateMode ? (
          <button className="singlePostBtn" onClick={_handleUpdate}>
            Update Post
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default SinglePost;
