import { useState } from "react";
import { check } from "./CodeMaker";
import { CodePeg } from "./CodePeg";
import { Guess } from "./Guess";
import { GameOver } from "./GameOver";

export const MAX_GUESSES = 10;
export const INDEXES = [0, 1, 2, 3];

const buildAnswer = () => {
  return Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6));
};

export const Game = () => {
  // Current guess
  const [guess, setGuess] = useState([0, 0, 0, 0]);

  // History: Array of Arrays of guesses
  const [guesses, setGuesses] = useState<number[][]>([]);

  const [answer, setAnswer] = useState(buildAnswer());
  const [won, setWon] = useState(false);

  const onColorChange = (index: number) => {
    const newGuess = [...guess];
    newGuess[index] = (guess[index] + 1) % 6;
    setGuess(newGuess);
    return;
  };

  const reset = () => {
    setWon(false);
    setGuess([0, 0, 0, 0]);
    setGuesses([]);
    setAnswer(buildAnswer());
    return;
  };

  const onGuess = () => {
    if (guesses.length === MAX_GUESSES) return;
    if (won) return;
    let newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
    setGuess([0, 0, 0, 0]);
    const response = check(guess, answer);
    setWon(response[0] === 4 && response[1] === 0);
    return;
  };

  const guessEnabled = !won && guesses.length < MAX_GUESSES;

  return (
    <div>
      <div className="flex">
        {INDEXES.map((i) => (
          <CodePeg
            key={i}
            index={i}
            color={guess[i]}
            onClick={onColorChange}
            enabled={guessEnabled}
          />
        ))}
        <button
          className="rounded-3xl border-4 border-black px-3 py-2 ml-3 text-lg font-semibold text-green-900 bg-gray-200"
          disabled={!guessEnabled}
          onClick={onGuess}
        >
          Guess
        </button>
      </div>
      <div className="my-6">
        <div className="mb-2">
          {guesses.map((guess, index) => (
            <Guess key={index} guess={guess} answer={answer}></Guess>
          ))}
        </div>
        <GameOver
          won={won}
          count={guesses.length}
          answer={answer}
          onPlayAgain={reset}
        />
      </div>
    </div>
  );
};
