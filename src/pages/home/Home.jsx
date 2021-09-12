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
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/posts" + search, {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).AccessToken,
          },
        });
        if (!res.statusText === "OK") {
          throw Error("Could not fetch the data from the resource");
        }
        setPosts(res.data);
      } catch (err) {
        setErr(true);
        console.log(err.message);
      }
    };
    fetchPosts();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        {err ? (
          <span
            style={{
              flex: "9",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "30px",
            }}
          >
            Something Went Wrong
          </span>
        ) : (
          <Posts posts={posts} />
        )}
      </div>
    </>
  );
};

export default Home;
