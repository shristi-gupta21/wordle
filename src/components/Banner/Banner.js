import React from "react";
import { checkGuess } from "../../game-helpers";

export const Banner = ({ status, guessesList }) => {
  return (
    <div>
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessesList.length} guesses</strong>.
          </p>
        </div>
      )}
      {status === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>LEARN</strong>.
          </p>
        </div>
      )}
    </div>
  );
};
