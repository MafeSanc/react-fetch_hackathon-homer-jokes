import React, { useEffect, useReducer } from "react";
import "./index.css";

const initialJoke = { joke: "" };

function reducer(state, action) {
  switch (action.type) {
    case "DAD-JOKES":
      return action.payload;
    default:
      return state;
  }
}

function JokeViewer() {
  const [joke, dispatch] = useReducer(reducer, initialJoke);

  async function getJoke() {
    let result = await fetch(process.env.REACT_APP_API_URL, {
      headers: { accept: "application/json" },
    });
    let data = await result.json();
    dispatch({ type: "DAD-JOKES", payload: data });
  }

  useEffect(() => {
    getJoke();
  }, []);

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
        <img
          className="App-logo"
          alt="Dad-Pic"
          src="https://www.newscenter1.tv/content/uploads/2020/06/Dad-jokes.jpg"
        />
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

export default JokeViewer;
