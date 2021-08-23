import React from "react";
import "./post.scss";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGJsb2clMjBiYWNrZ3JvdW5kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet lo</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur
        officia facilis aperiam asperiores itaque non neque sequi. Sunt
        recusandae a vel, unde animi blanditiis voluptates ex ipsa rerum nemo.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur
        officia facilis aperiam asperiores itaque non neque sequi. Sunt
        recusandae a vel, unde animi blanditiis voluptates ex ipsa rerum nemo.
      </p>
    </div>
  );
};

export default Post;
