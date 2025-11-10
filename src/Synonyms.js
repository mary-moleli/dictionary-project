import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.similar) {
    return (
      <ul className="similar">
        {props.similar.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
