import React, { useState } from "react";
import "./register.scss";
import { Link } from "react-router-dom";
import axios from "../../axios";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
        about,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="Register">
      <span className="RegisterTitle">Sign Up</span>
      <form className="RegisterForm" onSubmit={handleRegister}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username here"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your Email here"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>About</label>
        <input
          type="text"
          placeholder="Tell Somethin about you."
          autoComplete="off"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password here"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="RegisterBtn" type="submit">
          Sign Up
        </button>
        {error && (
          <span
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bolder",
            }}
          >
            Something Went Wrong!
          </span>
        )}
      </form>
      <Link className="link" to="/login">
        <button className="loginBtn">Sign In</button>
      </Link>
    </div>
  );
};

export default Register;
