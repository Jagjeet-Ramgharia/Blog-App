import React, { useContext, useState } from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { AuthContext } from "../../context/Context";
import axios from "../../axios";
import { loginFailure, loginStart, loginSuccess } from "../../context/Action";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, isFetching } = useContext(AuthContext);
  const [err, setErr] = useState(false);

  const login = async (e) => {
    e.preventDefault();
    const userCredentials = {
      username,
      password,
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
      setErr(err.response.data.error);
    }
  };
  return (
    <div className="login">
      <div className="wrapper">
        <div className="left">
          <figure>
            <img src="assets/login.png" alt="" />
          </figure>
        </div>
        <div className="right">
          <form className="loginForm" onSubmit={login}>
            <h1>Blogster</h1>
            <div className="div">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                className={username === "" ? "loginBtn disable" : "loginBtn"}
                type="submit"
              >
                {isFetching ? (
                  <CircularProgress color="white" size="18px" />
                ) : (
                  "Sign In"
                )}
              </button>
            </div>
            {err && (
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "gray",
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                {err}
              </span>
            )}
            <Link className="link" to="/reset">
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "gray",
                  marginTop: "10px",
                }}
              >
                forgot Password ?
              </span>
            </Link>
            <Link className="link" to="/register">
              <span className="registerBtn">
                Don't have an Account ? <b> Register</b>
              </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
