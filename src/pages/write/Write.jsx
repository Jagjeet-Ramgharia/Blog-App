import React, { useContext, useState } from "react";
import "./write.scss";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "../../axios";
import { AuthContext } from "../../context/Context";

const Write = () => {
  const [title, setTitle] = useState("");
  // const [desc, setDesc] = useState(null);
  const [file, setFile] = useState(null);
  const { user } = useContext(AuthContext);
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.user.username,
      title,
      desc: text,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost, {
        headers: {
          token:
            "Bearer " + JSON.parse(localStorage.getItem("user")).AccessToken,
        },
      });
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="formGroup">
          <label htmlFor="file">
            <i className="icon fas fa-plus-circle"></i>
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="CKeditor">
          <div className="container">
            <CKEditor
              editor={ClassicEditor}
              data={text}
              onChange={(e, editor) => {
                const data = editor.getData();
                setText(data);
              }}
            />
          </div>
          {/* <textarea
            type="text"
            placeholder="Share your experience"
            className="writeInput text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          /> */}
        </div>
        <button className="btn" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Write;
