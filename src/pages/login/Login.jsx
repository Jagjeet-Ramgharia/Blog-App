import React, { useContext, useRef } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import { login } from "../../context/loginCall";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(AuthContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    login(
      { username: userRef.current.value, password: passwordRef.current.value },
      dispatch
    );
  };
  console.log(user);
  return (
    <div className="login">
      <span className="loginTitle">Sign In</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your Username here"
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your Password here"
          ref={passwordRef}
        />
        <button className="loginBtn" type="submit" disabled={isFetching}>
          Sign In
        </button>
      </form>
      <Link className="link" to="/register">
        <button className="registerBtn">Register</button>
      </Link>
    </div>
  );
};

export default Login;
