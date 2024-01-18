import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function EnterWord({ guessesList, setGuessesList, answer, setStatus }) {
  const [guessWord, setGuessWord] = React.useState("");
  const handleSubmitGuess = (e) => {
    e.preventDefault();
    const newWord = { guess: guessWord, id: crypto.randomUUID() };
    const newGuessList = [...guessesList, newWord];
    setGuessesList(newGuessList);
    setGuessWord("");
    if (guessWord.toUpperCase() === answer) {
      setStatus("won");
    } else if (guessesList.length + 1 >= NUM_OF_GUESSES_ALLOWED) {
      setStatus("lost");
    }
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmitGuess}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        type="text"
        className="form-control"
        name="guess-input"
        id="guess-input"
        aria-describedby="helpId"
        pattern="[a-zA-Z]+"
        onChange={(e) => setGuessWord(e.target.value.toUpperCase())}
        placeholder=""
        value={guessWord}
        minLength={5}
        maxLength={5}
      />
    </form>
  );
}
export default EnterWord;
