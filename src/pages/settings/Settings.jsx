import React, { useContext, useState } from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "../../axios";
import { AuthContext } from "../../context/Context";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [about, setAbout] = useState(null);
  const { user, dispatch } = useContext(AuthContext);
  const PF = "http://localhost:8000/images/";

  //updating user profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user._id,
      username,
      email,
      password,
      about,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put(`/users/${user._id}`, updateUser);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <div className="settings">
      <Sidebar />
      <div className="wrapper">
        <div className="title">
          <span className="update">Update Your Account</span>
          <span className="delete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label htmlFor="">Profile Picture</label>
          <div className="oldPP">
            <img
              src={file ? URL.createObjectURL(file) : PF + user?.profilePic}
              alt=""
            />
            <label htmlFor="file">
              <i className="icon far fa-user-circle"></i>
            </label>
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            placeholder={user?.username}
            autoComplete="off"
            value={username}
            title={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user?.email}
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>About</label>
          <input
            type="text"
            placeholder={user?.about}
            autoComplete="off"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="updateBtn" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
