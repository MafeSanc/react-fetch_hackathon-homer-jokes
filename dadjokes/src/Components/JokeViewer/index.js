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
        <h1 data-testid="title"> Do you feel lucky punk?... Well do ya? </h1>
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


//click Homer to have a dad joke appear
//bart randomly replies, using the randomizer, using a useEffect
