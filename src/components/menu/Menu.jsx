import React, { useContext } from "react";
import "./menu.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">About</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Contact</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="/write">Write</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
