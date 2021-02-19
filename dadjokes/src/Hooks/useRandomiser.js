import React, { useState } from "react";


function useRandomiser(min = 1, max = 10) {
    const [number, setNumber] = useState(min);

    function randomise() {
        setNumber(Math.floor(Math.random() * (max - min)) + min);

    }
    return [number, randomise];
}

export default useRandomiser;