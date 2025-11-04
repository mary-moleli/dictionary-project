import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <div>
        <p>
          {props.meaning.definition}
          <br />
          <em>{props.meaning.example}</em>
        </p>
      </div>
    </div>
  );
}
