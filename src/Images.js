import React from "react";

export default function Images(props) {
  //console.log(props.pictures);
  if (props.pictures) {
    return (
      <section className="images">
        {props.pictures.map(function (photo, index) {
          return <img src={photo.src.small} key={index} alt={photo.alt} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}
