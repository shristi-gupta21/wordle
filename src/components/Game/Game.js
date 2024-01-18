import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import EnterWord from "../EnterWord/EnterWord";
import GuessList from "../GuessList/GuessList";
import { Banner } from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessesList, setGuessesList] = React.useState([]);
  const [status, setStatus] = React.useState("running");
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
        <Banner guessesList={guessesList} answer={answer} status={status} />
      )}
    </>
  );
}

export default Game;
