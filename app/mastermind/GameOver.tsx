import { SyntheticEvent } from "react";
import { Guess } from "./Guess";
import { MAX_GUESSES } from "./Game";
import { GameButton } from "../components/GameButton";

interface GameOverProps {
  answer: number[];
  count: number;
  onPlayAgain: (event: SyntheticEvent) => void;
  won: boolean;
}

interface WinnerProps {
  count: number;
}

interface LoserProps {
  answer: number[];
}

const CSS = {
  border: "my-8 rounded-2xl bg-gray-800 p-4 md:p-8",
  winnerText:
    "font-bold text-xl md:text-2xl space-x-3 md:space-x-6 text-center",
};

function Winner({ count }: WinnerProps) {
  function message() {
    if (count < 3) return "Amazing!";
    if (count < 5) return "Super!";
    if (count < 9) return "Good Job!";
    return "Whew!";
  }

  return (
    <>
      <div className={`${CSS.border} ${CSS.winnerText} border-2 border-white`}>
        <span className="text-red-500">W</span>
        <span className="text-orange-500">I</span>
        <span className="text-yellow-400">N</span>
        <span className="text-green-600">N </span>
        <span className="text-blue-600">E</span>
        <span className="text-purple-600">R</span>
        <span className="text-white">!</span>
        <span className="text-white">!</span>
        <span className="text-white">!</span>
      </div>
      <div className="text-gray-900 dark:text-white mb-6">
        {message()}&nbsp; You got it in {count} guesses!
      </div>
    </>
  );
}

function Loser({ answer }: LoserProps) {
  return (
    <>
      <div className={CSS.border}>
        <div className="text-gray-200 mb-4">
          Too bad! You did not guess the code. The correct answer was:
        </div>
        <Guess answer={[]} guess={answer} />
      </div>
    </>
  );
}

export function GameOver({ answer, count, onPlayAgain, won }: GameOverProps) {
  if (won) {
    return (
      <>
        <Winner count={count} />
        <GameButton onClick={onPlayAgain}>Play Again</GameButton>
      </>
    );
  }
  if (count === MAX_GUESSES) {
    return (
      <>
        <Loser answer={answer} />
        <GameButton onClick={onPlayAgain}>Play Again</GameButton>
      </>
    );
  }
  return null;
}
