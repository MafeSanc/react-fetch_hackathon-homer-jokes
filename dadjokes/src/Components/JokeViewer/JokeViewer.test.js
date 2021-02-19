import React from "react";
import {render, fireEvent} from "@testing-library/react";
import JokeViewer from "./";
import {reducer} from "./";

const testProps= {
    button:
handleClick: jest.fn(),

};

test("When clicked, HandleClick return a new joke from API", ()=> {
    const {getByTestId} = render(<JokeViewer {...testProps} />);
    const actual = getByTestId ("jokeButtonId");
    fireEvent.click(actual);
    expect(testProps.handleClick).toHaveBeenCalled();
});

// test("When clicked, HandleClick return a new joke from API", ()=> {

//     const actual = reducer(null, {type:'DAD-JOKES'});
//     const expected = (null);
//     expect(actual).toEqual(expected);
 
// });


