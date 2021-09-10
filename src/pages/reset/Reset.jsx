import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./reset.scss";
import axios from "../../axios";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const _handleReset = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/reset-password", { email });
      res && setSent(true);
      setEmail("");
    } catch (err) {
      setErr(err.response.data.error);
      setTimeout(setErr, 3000);
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
            Enter your email and we'll send you a link to get back into your
            account.
          </p>
          <div className="reset_pwd">
            <input
              type="text"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className={email === "" ? "reset_btn disable" : "reset_btn"}
            >
              Send Email
            </button>
            {err ? (
              <span
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "gray",
                  fontSize: "14px",
                }}
              >
                {err}
              </span>
            ) : null}
            {sent ? (
              <span
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                  color: "gray",
                }}
              >
                Email Sent
              </span>
            ) : null}
          </div>
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

export default Reset;
