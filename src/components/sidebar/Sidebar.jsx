import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  const [cats, setCats] = useState([]);

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
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
          nostrum mollitia dolore doloremque sapiente soluta recusandae
          reiciendis, quis ipsum consequuntur, ex temporibus saepe consectetur
          officia qui aliquid fugiat corporis culpa!
        </p>
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
