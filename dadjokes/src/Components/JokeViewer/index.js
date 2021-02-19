import React, { useEffect, useReducer } from "react";
import "./index.css";
//import useRandomiser from "../../Hooks/useRandomiser";

function reducer(state, action) {
  switch (action.type) {
    case "DAD-JOKES":
      return action.payload;
    default:
      return state;
  }
}

function JokeViewer() {
  const [joke, dispatch] = useReducer(reducer, null);
  //const [computerMove, randomiser] = useRandomiser("");

  async function getJoke() {
    let result = await fetch(process.env.REACT_APP_API_URL, {
      headers: { accept: "application/json" },
    });
    let data = await result.json();
    dispatch({ type: "DAD-JOKES", payload: data.joke });
  }

  useEffect(() => {
    getJoke();
  }, []);

  //player selects heads or tails
  // store player move
  // run toss coin
  // if player move = coin toss, player wins - trophy
  //if player move != coin toss, player loses - get dad joke

  function handleClick() {
    getJoke();
  }

  // function compareMove (computerMove){
  //   if (computerMove ===0 ){
  //   return getJoke();}
  //   else {console.log("Trophy")}
  // }

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
      </header>
    </div>
  );
}

export default JokeViewer;
