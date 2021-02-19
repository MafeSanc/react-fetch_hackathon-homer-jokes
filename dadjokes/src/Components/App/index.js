import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");

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
        <h1> The J-J-Jokes: A tribute </h1>
        <button className="myButton" onClick={handleClick}>
          Click to start...
        </button>
      
        <p className="quote">{joke}</p>
        <button className="myButton" onClick={handleClick}>
          Tell me another...
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