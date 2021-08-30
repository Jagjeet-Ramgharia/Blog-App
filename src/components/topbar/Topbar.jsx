import React, { useContext } from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const { user } = useContext(AuthContext);
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topleft">
        <a className="link" href="#" target="_blank">
          <i className="fab fa-instagram icon"></i>
        </a>
        <a
          className="link"
          href="https://github.com/Jagjeet-Ramgharia"
          target="_blank"
        >
          <i className="fab fa-github icon"></i>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/jagjeet-singh-84a60a171/"
          target="_blank"
        >
          <i className="fab fa-linkedin icon"></i>
        </a>
      </div>
      <Link to="/" className="link">
        <div className="topcenter">Blogster</div>
      </Link>
      <div className="topright">
        {user ? (
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        ) : (
          <>
            <Link className="link" to="/login">
              Login
            </Link>
            <Link className="link" to="/register">
              Register
            </Link>
          </>
        )}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
