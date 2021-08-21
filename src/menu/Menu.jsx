import React from "react";
import "./menu.scss";

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#testimonial">Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#works">Write</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
