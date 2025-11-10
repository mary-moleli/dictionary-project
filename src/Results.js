import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <div className="text">{props.results.phonetic}</div>
          {props.results.meanings.map(function (element, index) {
            return (
              <section key={index}>
                <Meaning meaning={element} />
              </section>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
