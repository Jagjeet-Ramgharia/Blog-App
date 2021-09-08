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
      <form className="RegisterForm" onSubmit={handleRegister}>
        <div className="title">
          <span className="RegisterTitle">Blogster</span>
          <p className="text">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <div className="form_item">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            placeholder="Tell Somethin about you."
            autoComplete="off"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className={
              email === "" || password === "" || about === "" || username === ""
                ? "RegisterBtn disable"
                : "RegisterBtn"
            }
            type="submit"
          >
            Sign Up
          </button>
        </div>
        {error && (
          <span
            style={{
              color: "gray",
              textAlign: "center",
            }}
          >
            Something Went Wrong!
          </span>
        )}

        <p className="text">
          By signing up, you agree to our Terms , Data Policy and Cookies Policy
          .
        </p>
        <Link className="link" to="/login">
          <span className="loginBtn">Have an account? Log in</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
