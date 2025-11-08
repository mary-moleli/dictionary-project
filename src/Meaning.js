import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
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
        </p>
      </div>
    </div>
  );
}
