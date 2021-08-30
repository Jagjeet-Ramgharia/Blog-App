import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "../../axios";
import "./home.scss";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get("/posts" + search);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
