import React, { useState } from "react";


function useRandomiser() {
    const [computerMove, setComputerMove] = useState("")
    

    function randomise() {
        const choices = ["Eat my shorts", "don't have a cow man", "ay, caramba", "This is too cool for School (of Code)"];
        setComputerMove(Math.floor(Math.random()*choices.length));
        console.log(computerMove);
    }
    return [computerMove, randomise];
}

export default useRandomiser;

