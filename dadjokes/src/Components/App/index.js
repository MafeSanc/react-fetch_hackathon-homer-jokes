import React, { useState, useEffect } from "react";
import "./App.css";
import useRandomiser from "../../Hooks/useRandomiser";



function App() {
  const [joke, setJoke] = useState("");
  const [computerMove, randomiser] = useRandomiser("");

//player selects heads or tails
// store player move
// run toss coin
// if player move = coin toss, player wins - trophy
//if player move != conin toss, player loses - get dad joke

  
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

  function HandleClick() {
    useRandomiser();
    
    // getJoke();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Do you feel lucky punk...... well do you?? </h1>
        <h2>Select heads or Tails</h2>
        <button className="myButton" onClick={HandleClick}>
          Heads?
        </button>
      
        <p className="quote">{joke}</p>
        <button className="myButton" onClick={HandleClick}>
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