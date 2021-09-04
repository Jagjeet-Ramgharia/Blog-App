import React, { useContext, useRef, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/Context";
import axios from "../../axios";
import { loginFailure, loginStart, loginSuccess } from "../../context/Action";

const Login = () => {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(AuthContext);
  const [err, setErr] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const userCredentials = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    dispatch(loginStart());
    try {
      const res = await axios.post("auth/login", userCredentials);
      if (!res.statusText === "OK") {
        throw Error("Something Went Wrong");
      }
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
      setErr(true);
    }
  };
  return (
    <div className="login">
      <span className="loginTitle">Sign In</span>
      <form className="loginForm" onSubmit={login}>
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
        {err && (
          <span
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "whitesmoke",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Invalid Username and Password
          </span>
        )}
      </form>
      <Link className="link" to="/register">
        <button className="registerBtn">Register</button>
      </Link>
    </div>
  );
};

export default Login;
