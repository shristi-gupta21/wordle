import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import EnterWord from "../EnterWord/EnterWord";
import GuessList from "../GuessList/GuessList";
import Banner from "../Banner/Banner";
import Keyboard from "../Keyboard/Keyboard";
import { checkGuess } from "../../game-helpers";

// Pick a random word on every pageload.
// To make debugging easier, we'll log the solution in the console.
function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [status, setStatus] = React.useState("running");
  const [answer, setAnswer] = React.useState(sample(WORDS));
  function handleRestart() {
    const newAns = sample(WORDS);
    setAnswer(newAns);
    setGuessesList([]);
    setStatus("running");
  }
  const validatedGuesses = guessesList.map((obj) =>
    checkGuess(obj.guess, answer)
  );
  return (
    <>
      <GuessList guessesList={guessesList} answer={answer} />
      {status === "running" ? (
        <EnterWord
          guessesList={guessesList}
          setGuessesList={setGuessesList}
          status={status}
          setStatus={setStatus}
          answer={answer}
        />
      ) : (
        <Banner
          guessesList={guessesList}
          answer={answer}
          status={status}
          handleRestart={handleRestart}
        />
      )}
      <Keyboard validatedGuesses={validatedGuesses} />
    </>
  );
}

export default Game;
