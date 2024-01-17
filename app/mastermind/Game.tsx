import { useState } from "react";
import { check } from "./CodeMaker";
import { CodePeg } from "./CodePeg";
import { GameButton } from "../components/GameButton";
import { Guess } from "./Guess";
import { GameOver } from "./GameOver";

export const MAX_GUESSES = 10;
export const INDEXES = [0, 1, 2, 3];

function buildAnswer() {
  return Array(4)
    .fill(0)
    .map(() => Math.floor(Math.random() * 6));
}

export function Game() {
  // Current guess
  const [guess, setGuess] = useState([0, 0, 0, 0]);

  // History: Array of Arrays of guesses
  const [guesses, setGuesses] = useState<number[][]>([]);

  const [answer, setAnswer] = useState(buildAnswer());
  const [won, setWon] = useState(false);

  function onColorChange(index: number) {
    const newGuess = [...guess];
    newGuess[index] = (guess[index] + 1) % 6;
    setGuess(newGuess);
    return;
  }

  function reset() {
    setWon(false);
    setGuess([0, 0, 0, 0]);
    setGuesses([]);
    setAnswer(buildAnswer());
    return;
  }

  function onGuess() {
    if (guesses.length === MAX_GUESSES) return;
    if (won) return;
    let newGuesses = [...guesses];
    newGuesses.push(guess);
    setGuesses(newGuesses);
    setGuess([0, 0, 0, 0]);
    const response = check(guess, answer);
    setWon(response[0] === 4 && response[1] === 0);
    return;
  }

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
        <GameButton disabled={!guessEnabled} onClick={onGuess} text="Guess" />
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
}
