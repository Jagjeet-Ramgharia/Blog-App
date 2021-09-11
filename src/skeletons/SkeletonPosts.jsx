import React from "react";
import SkeletonElements from "./SkeletonElements";
import "./skeleton.css";

const SkeletonPosts = (type) => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-artical">
        <SkeletonElements type="img" />
        <SkeletonElements type="title" />
        <SkeletonElements type="title" />
        <SkeletonElements type="title" />
        <SkeletonElements type="text" />
      </div>
    </div>
  );
};

export default SkeletonPosts;
