import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessList({ guessesList, answer }) {
  return (
    <>
      <div className="guess-results">
        {range(NUM_OF_GUESSES_ALLOWED).map((num, index) => (
          <Guess key={index} answer={answer} value={guessesList[num]} />
        ))}
      </div>
    </>
  );
}
export default GuessList;
