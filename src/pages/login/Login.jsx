import React from "react";
import "./login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <span className="loginTitle">Sign In</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Enter your Email here" />
        <label>Password</label>
        <input type="password" placeholder="Enter your Password here" />
        <button className="loginBtn">Sign In</button>
      </form>
      <Link className="link" to="/register">
        <button className="registerBtn">Register</button>
      </Link>
    </div>
  );
};

export default Login;
