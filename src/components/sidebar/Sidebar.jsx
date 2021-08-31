import React, { useContext, useEffect, useState } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import { AuthContext } from "../../context/Context";

const Sidebar = () => {
  const [cats, setCats] = useState([]);
  const { user } = useContext(AuthContext);
  const PF = "http://localhost:8000/images/";

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get("/categories");
        setCats(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebaritem">
        <span className="sidebartitle">About Me</span>
        <img src={PF + user?.profilePic} alt="" />
        <p>{user?.about}</p>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => {
            return (
              <Link className="link" to={`/?cat=${c.name}`}>
                <li className="sidebarListItem">{c.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="sidebaritem">
        <span className="sidebartitle">Follow Us</span>
        <div className="sidebaricon">
          <i className="fab fa-instagram icon"></i>
          <i className="fab fa-github icon"></i>
          <i className="fab fa-linkedin icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
