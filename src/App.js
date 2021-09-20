import React, { useState } from "react";
import "./styles.css";

var symbolDictionary = {
  "💖": "Sparkling Heart",
  "💯": "Hundred Points Symbol",
  "💢": "Anger Symbol",
  "💭": "Thought Balloon",
  "♨️": "Hot Springs",
  "🛑": "Stop Sign",
  "🌀": "Cyclone",
  "🔇": "Muted Speaker",
  "🔔": "Bell"
};

var userName = "Arpit";
var data = "blue";

var symbolWeKnow = Object.keys(symbolDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");

  function clickHandler(event) {
    // var emoji=symbolDictionary[event];
    var symbol = event.target.value;
    var meaning = symbolDictionary[symbol];
    if (meaning === undefined) {
      meaning = "not defined";
    }
    setmeaning(meaning);
    //console.log(event.target.value);
  }
  function symbolclickHandler(events) {
    var meaning = symbolDictionary[events];
    setmeaning(meaning);
  }

  return (
    <div className="App">
      <h1>
        Welcome <span style={{ color: data }}>{userName}</span>
      </h1>
      <input onChange={clickHandler}></input>
      <h2>{meaning}</h2>
      {symbolWeKnow.map(function (events) {
        return (
          <span
            style={{ fontSize: "2rem", padding: "1rem" }}
            onClick={() => symbolclickHandler(events)}
          >
            {events}
          </span>
        );
      })}
    </div>
  );
}
