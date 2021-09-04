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
    const fetchPost = async () => {
      try {
        const res = await axios.get("/posts" + search);
        if (!res.statusText === "OK") {
          throw Error("Could not fetch the data from the resource");
        }
        setPosts(res.data);
      } catch (err) {
        setErr(true);
        console.log(err.message);
      }
    };
    fetchPost();
  }, [search]);
  return (
    <>
      <Header />
      <div className="home">
        <Sidebar />
        {err ? (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              flex: "9",
              fontSize: "25px",
              fontWeight: "500",
            }}
          >
            Something Went Wrong.Please refresh the page or Logout.
          </span>
        ) : (
          <Posts posts={posts} />
        )}
      </div>
    </>
  );
};

export default Home;
