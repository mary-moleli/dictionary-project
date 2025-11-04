import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="results">
        <h4>{props.results.word}</h4>
        {props.results.meanings.map(function (element, index) {
          return (
            <div key={index}>
              <Meaning meaning={element} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
