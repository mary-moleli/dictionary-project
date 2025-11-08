import React from "react";

export default function Synonyms(props) {
  if (props.similar)
    return (
      <ul className="similar">
        <li>{props.similar}</li>
      </ul>
    );
  else {
    return null;
  }
}
