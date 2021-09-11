import React, { useContext } from "react";
import "./topbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { logout } from "../../context/Action";

const Topbar = ({ menuOpen, setMenuOpen }) => {
  const { user, dispatch } = useContext(AuthContext);
  const PF = "http://localhost:8000/images/";
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    window.location.replace("/login");
  };
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="topleft">
        <i className="fab fa-instagram icon"></i>

        <a className="link" href="https://github.com/Jagjeet-Ramgharia">
          <i className="fab fa-github icon"></i>
        </a>
        <a
          className="link"
          href="https://www.linkedin.com/in/jagjeet-singh-84a60a171/"
        >
          <i className="fab fa-linkedin icon"></i>
        </a>
      </div>
      <Link to="/" className="link">
        <div className="topcenter">Blogster</div>
      </Link>
      <div className="topright">
        {user ? (
          <>
            <span className="logout" onClick={handleLogout}>
              <i className="fas fa-power-off"></i>
            </span>
            <Link to="/settings">
              <img
                src={
                  PF + user?.profilePic
                    ? PF + user?.profilePic
                    : user?.profilePic
                }
                alt=""
              />
            </Link>
          </>
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
