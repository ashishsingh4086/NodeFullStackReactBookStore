import React, { Component } from "react";
import { Link } from "react-router-dom";

export default props => {
  return (
    <div className="row">
      <div className="col s12 m7">
        <div className="card">
          <div className="card-image">
            <img src={props.value.image_url} />
          </div>
          <Link to={`/${props.value._id}`}>{props.value.title}</Link>
          <div className="card-content">
            <span>
              {" "}
              <strong>Author:</strong>
              {props.value.author}
            </span>
            <p>{props.value.description}</p>
            <code> {props.value.genre}</code>
          </div>
        </div>
      </div>
    </div>
  );
};
