import React from "react";
import "./write.scss";

const Write = () => {
  return (
    <div className="write">
      <img className="writeImg" src="assets/header.jpg" alt="" />
      <form className="writeForm">
        <div className="formGroup">
          <label htmlFor="file">
            <i className="icon fas fa-plus-circle"></i>
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="formGroup">
          <textarea
            type="text"
            placeholder="Share your experience"
            className="writeInput text"
          />
        </div>
        <button className="btn">Publish</button>
      </form>
    </div>
  );
};

export default Write;
