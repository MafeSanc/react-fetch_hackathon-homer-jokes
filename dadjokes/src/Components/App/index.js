import React, { useState, useEffect } from "react";
import "./App.css";
import useRandomiser from "../../Hooks/useRandomiser";

let min = 1;
let max = 10;

function App() {
  const [joke, setJoke] = useState("");
  const [number, randomiser] = useRandomiser(min, max);

  
//this is computers play against user
  function headsOrTails (heads, tails) {
    if (number <= 5 ) {
      return heads;
    } else {
      return tails;
    }
  }

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    fetch(process.env.REACT_APP_API_URL, {
      headers: { accept: "application/json" },
    })
      .then((res) => res.json())
      .then(({ joke }) => setJoke(joke));
  }

  function handleClick() {
    getJoke();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Heads or Tails? </h1>
        <button className="myButton" onClick={handleClick}>
          Heads?
        </button>
      
        <p className="quote">{joke}</p>
        <button className="myButton" onClick={handleClick}>
          Tails?
        </button>
        <img
          className="JJ-pic"
          alt="JJ"
          src="https://ca.slack-edge.com/T6L933W4X-U01J3LDNC0Z-519bc187fdf3-512"
        />
      </header>
    </div>
  );
}

export default App;