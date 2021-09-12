import React, { useContext, useState } from "react";
import "./settings.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import axios from "../../axios";
import { AuthContext } from "../../context/Context";

const Settings = () => {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const { user, dispatch } = useContext(AuthContext);
  const PF = "http://localhost:8000/images/";
  console.log(user);
  //updating user profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updateUser = {
      userId: user.user._id,
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
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const userId = user.user._id;
      const res = await axios.put(`/users/${userId}`, updateUser, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).AccessToken,
        },
      });
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
      window.location.replace("/");
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  console.log(user);
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
              src={
                file ? URL.createObjectURL(file) : PF + user?.user?.profilePic
              }
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
            placeholder={user?.user?.username}
            autoComplete="off"
            value={username}
            title={user.username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder={user?.user?.email}
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>About</label>
          <input
            type="text"
            placeholder={user?.user?.about}
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
