import axios from "../../axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./verify.scss";

const Verify = () => {
  const { token } = useParams();
  const _handle_Activation = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/auth/verify-account", { token });
      console.log(res);
      res.data && window.location.replace("/login");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="verify">
      <p className="title">Blogster</p>
      <div className="wrapper">
        <i className="fas fa-user-check"></i>
        <div className="items">
          <span>Thank You For Registration</span>
          <p>Click the button to verify your account</p>
          <button onClick={_handle_Activation}>Verify Account</button>
        </div>
        <p>If the link expired you need to register again.</p>
      </div>
    </div>
  );
};

export default Verify;
