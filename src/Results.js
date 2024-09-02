import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  console.log(props.results);
  return (
    <div className="Results">
      <h2>{props.results.word}</h2>
      {props.results.meanings.map(function (meaning, index) {
        return (
          <div key={index}>
            <h3>{meaning.partOfSpeech}</h3>
            {meaning.definitions.map(function (definition, index) {
              return (
                <div key={index}>
                  <p>
                    {definition.definition}
                    <br />
                    <em>{definition.example}</em>
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
