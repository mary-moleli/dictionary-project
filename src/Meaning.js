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
          <div className="definition">{props.meaning.definition}</div>

          <em className="example">{props.meaning.example}</em>
          <br />
          <Synonyms similar={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
