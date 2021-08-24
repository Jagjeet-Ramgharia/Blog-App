import React from "react";
import "./register.scss";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="Register">
      <span className="RegisterTitle">Sign Up</span>
      <form className="RegisterForm">
        <label>Username</label>
        <input type="text" placeholder="Enter your Username here" />
        <label>Email</label>
        <input type="email" placeholder="Enter your Email here" />
        <label>Password</label>
        <input type="password" placeholder="Enter your Password here" />
        <button className="RegisterBtn">Sign Up</button>
      </form>
      <Link className="link" to="/login">
        <button className="loginBtn">Sign In</button>
      </Link>
    </div>
  );
};

export default Register;
