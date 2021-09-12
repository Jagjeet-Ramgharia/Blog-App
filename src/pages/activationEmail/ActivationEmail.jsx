import React from "react";

const ActivationEmail = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#fafafa",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          height: "80vh",
          width: "80%",
          backgroundColor: "inherit",
          border: "1px solid lightgray",
          boxShadow: "0 18px 18px -8px black",
        }}
      >
        <i
          style={{ fontSize: "80px" }}
          className="fas fa-envelope-open-text"
        ></i>
        <span
          style={{
            color: "white",
            fontSize: "18px",
            border: "1px solid",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#0095f6",
            cursor: "progress",
          }}
        >
          Activation Email has been sent, Kindly verify your account
        </span>
        <p style={{ color: "gray" }}>
          We sent an email to the given email address to verify your email and
          activate your account.The Link in the email will expires in 10 minutes
        </p>
        <p style={{ color: "gray", textAlign: "center" }}>
          <b>Click here</b>, If you didn't receive any email or would you like
          to change the email address you signed up with.
        </p>
      </div>
    </div>
  );
};

export default ActivationEmail;
