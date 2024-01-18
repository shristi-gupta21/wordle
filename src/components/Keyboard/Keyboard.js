import React from "react";
const ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];
const Keyboard = ({ validatedGuesses }) => {
  const getStatus = () => {
    const statusObj = {};
    const allLetters = validatedGuesses.flat();

    allLetters.forEach(({ letter, status }) => {
      const currentStatus = statusObj[letter];
      if (currentStatus === undefined) {
        statusObj[letter] = status;
        return;
      }

      const STATUS_RANKS = {
        correct: 1,
        misplaced: 2,
        incorrect: 3,
      };

      const currentStatusRank = STATUS_RANKS[currentStatus];
      const newStatusRank = STATUS_RANKS[status];

      if (newStatusRank < currentStatusRank) {
        statusObj[letter] = status;
      }
    });
    return statusObj;
  };
  const statusByLetter = getStatus(validatedGuesses);
  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div key={index} className="keyboard-row">
          {row.map((char, index) => (
            <div key={index} className={`letter ${statusByLetter[char] || ""}`}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
