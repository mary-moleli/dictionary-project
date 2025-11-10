import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>

      <div>
        <p>
          <strong>Definition:</strong>
          <div className="definition">{props.meaning.definition}</div>
          <br />
          <strong>Example:</strong>
          <em className="example">{props.meaning.example}</em>
          <br />
          <Synonyms similar={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
