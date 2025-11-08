import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  //console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>

      <div>
        <p>
          <strong>Definition:</strong>
          {props.meaning.definition}
          <br />
          <strong>Example:</strong>
          <em>{props.meaning.example}</em>
          <br />
          <strong>synonyms:</strong>
          <Synonyms similar={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
