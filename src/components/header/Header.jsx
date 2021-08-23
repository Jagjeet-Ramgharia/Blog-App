import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitle">
        <span>Read & Write Blogs</span>
      </div>
      <img
        src="https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
        alt=""
      />
    </div>
  );
};

export default Header;
