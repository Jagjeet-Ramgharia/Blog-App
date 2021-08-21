import React from "react";
import Header from "../../header/Header";
import Post from "../../posts/Post";
import Sidebar from "../../sidebar/Sidebar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        <Post />
      </div>
    </>
  );
};

export default Home;
