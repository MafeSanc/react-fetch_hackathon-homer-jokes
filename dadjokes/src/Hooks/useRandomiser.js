import React, { useState } from "react";


function useRandomiser() {
    const [computerMove, setComputerMove] = useState("")
    

    function randomise() {
        const choices = ["heads", "tails"];
        setComputerMove(Math.floor(Math.random()*choices.length));
        console.log(computerMove);
    }
    return [computerMove, randomise];
}

export default useRandomiser;

