import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./resetpassword.scss";
import axios from "../../axios";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [msg, SetMsg] = useState(false);
  const [err, setError] = useState(false);

  const { token } = useParams();

  const _handleReset = async (e) => {
    e.preventDefault();
    try {
      if (cpassword !== password) {
        setError(true);
      }
      await axios.post("/auth/new-password", { password, token });
      SetMsg(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="reset">
      <div className="wrapper">
        <form className="reset_form" onSubmit={_handleReset}>
          <figure>
            <i className="fas fa-unlock-alt"></i>
          </figure>
          <p>
            Reset your password here.Your password must contain at least 8
            character.
          </p>
          <div className="reset_pwd">
            <input
              type="password"
              placeholder="New Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              required
              value={cpassword}
              onChange={(e) => setCPassword(e.target.value)}
            />
            <button
              type="submit"
              className={password === "" ? "reset_btn disable" : "reset_btn"}
            >
              Reset Password
            </button>
          </div>
          {err ? (
            <span style={{ textAlign: "center", color: "gray" }}>
              Password does not match
            </span>
          ) : null}
          {msg ? (
            <span style={{ textAlign: "center", color: "gray" }}>
              Password Updated
            </span>
          ) : null}
          <hr style={{ width: "95%", color: "lightgray" }} />
          <Link className="link" to="/register">
            <span style={{ color: "gray", opacity: "0.6" }}>
              Create New Account
            </span>
          </Link>
          <Link className="link" to="/login">
            <span style={{ color: "gray", opacity: "0.6" }}>Back to Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
