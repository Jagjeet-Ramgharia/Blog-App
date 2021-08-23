import React from "react";
import "./singlepost.scss";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="wrapper">
        <img
          className="postImg"
          src="https://images.unsplash.com/photo-1511497584788-876760111969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80"
          alt=""
        />
        <h1 className="title">
          Lorem ipsum dolor sit amet.
          <div className="editContainer">
            <i className="icon far fa-edit"></i>
            <i className="icon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="infoContainer">
          <span className="author">
            Author: <b>Jagjeet</b>
          </span>
          <span className="date">1 hour ago</span>
        </div>
        <p className="desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sit
          quae a saepe, adipisci perferendis voluptatem voluptatibus atque
          minima fuga maxime harum non eius officia illum nisi dicta, reiciendis
          veritatis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facere, sit quae a saepe, adipisci perferendis voluptatem voluptatibus
          atque minima fuga maxime harum non eius officia illum nisi dicta,
          reiciendis veritatis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Facere, sit quae a saepe, adipisci perferendis
          voluptatem voluptatibus atque minima fuga maxime harum non eius
          officia illum nisi dicta, reiciendis veritatis? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Facere, sit quae a saepe, adipisci
          perferendis voluptatem voluptatibus atque minima fuga maxime harum non
          eius officia illum nisi dicta, reiciendis veritatis? Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Facere, sit quae a saepe,
          adipisci perferendis voluptatem voluptatibus atque minima fuga maxime
          harum non eius officia illum nisi dicta, reiciendis veritatis? Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Facere, sit quae a
          saepe, adipisci perferendis voluptatem voluptatibus atque minima fuga
          maxime harum non eius officia illum nisi dicta, reiciendis veritatis?
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, sit
          quae a saepe, adipisci perferendis voluptatem voluptatibus atque
          minima fuga maxime harum non eius officia illum nisi dicta, reiciendis
          veritatis? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Facere, sit quae a saepe, adipisci perferendis voluptatem voluptatibus
          atque minima fuga maxime harum non eius officia illum nisi dicta,
          reiciendis veritatis? Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Facere, sit quae a saepe, adipisci perferendis
          voluptatem voluptatibus atque minima fuga maxime harum non eius
          officia illum nisi dicta, reiciendis veritatis? Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Facere, sit quae a saepe, adipisci
          perferendis voluptatem voluptatibus atque minima fuga maxime harum non
          eius officia illum nisi dicta, reiciendis veritatis?
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
