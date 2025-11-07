import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h4>{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map(function (elaborate, index) {
        return (
          <div key={index}>
            <p>
              {elaborate.definition}
              <br />
              <em>{elaborate.example}</em>
            </p>
          </div>
        );
      })}
    </div>
  );
}
