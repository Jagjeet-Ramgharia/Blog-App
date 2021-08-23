import React from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";

const Settings = () => {
  return (
    <div className="settings">
      <Sidebar />
      <div className="wrapper">
        <div className="title">
          <span className="update">Update Your Account</span>
          <span className="delete">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label htmlFor="">Profile Picture</label>
          <div className="oldPP">
            <img src="assets/header.jpg" alt="" />
            <label htmlFor="file">
              <i className="icon far fa-user-circle"></i>
            </label>
            <input type="file" id="file" style={{ display: "none" }} />
          </div>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Username" autoComplete="off" />
          <label>Email</label>
          <input type="email" placeholder="Email" autoComplete="off" />
          <label>Password</label>
          <input type="password" />
          <button className="updateBtn">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
