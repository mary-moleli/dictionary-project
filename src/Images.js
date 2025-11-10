import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.pictures) {
    return (
      <section className="images">
        <div className="row">
          {props.pictures.map(function (photo, index) {
            console.log(photo);
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt={photo.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
