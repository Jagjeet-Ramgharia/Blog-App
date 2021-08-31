import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/settings">Settings</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/write">Write</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
