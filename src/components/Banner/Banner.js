import React from "react";

const Banner = ({ status, guessesList, answer, handleRestart }) => {
  return (
    <div>
      {status === "won" && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong> {guessesList.length} guesses</strong>.
          </p>
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      )}
      {status === "lost" && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
          <button onClick={handleRestart}>Restart Game</button>
        </div>
      )}
    </div>
  );
};

export default Banner;
