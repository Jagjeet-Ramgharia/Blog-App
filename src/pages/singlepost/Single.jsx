import React from "react";
import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/single/SinglePost";

const Single = () => {
  return (
    <div className="single">
      <SinglePost />
    </div>
  );
};

export default Single;
