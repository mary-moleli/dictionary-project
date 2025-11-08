import React from "react";

export default function Synonyms(props) {
  if (props.similar)
    return (
      <ul className="similar">
        return <li>{props.similar}</li>;
      </ul>
    );
  else {
    return null;
  }
}
