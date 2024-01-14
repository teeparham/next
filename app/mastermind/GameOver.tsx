import { SyntheticEvent } from "react";
import {Guess} from './Guess';

interface GameOverProps {
  answer: number[];
  count: number;
  onPlayAgain: (event: SyntheticEvent) => void;
  won: boolean;
}

interface PlayAgainProps {
  onClick: (event: SyntheticEvent) => void;
}

interface WinnerProps {
  count: number;
}

interface LoserProps {
  answer: number[];
}

const Winner = ({ count }: WinnerProps) => {
  const message = () => {
    if (count < 3) return "Amazing!"
    if (count < 5) return "Super!"
    if (count < 9) return "Good Job!"
    return "Whew!"
  }
  return (
    <>
      <div className="my-8 rounded-2xl border-2 border-white p-8 bg-gray-900 font-bold text-xl md:text-2xl space-x-3 md:space-x-6 text-center">
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
      <div className="mb-6">
        {message()}&nbsp;
        You got it in {count} guesses!
      </div>
    </>
  );
};

const Loser = ({answer}: LoserProps) => {
  return (<>
  <div className="my-8 rounded-2xl border-2 p-8 bg-gray-800">
    <div className="text-white fontsemi-bold mb-4">
      Too bad! You did not guess the code. The correct answer was:
    </div>
    <Guess answer={[]} guess={answer} />
  </div>
</>)  
};

const PlayAgain = ({ onClick }: PlayAgainProps) => {
  return (
    <button
      className="rounded-3xl border-4 border-black px-3 py-2 text-lg font-semibold text-green-900 bg-gray-200"
      onClick={onClick}
    >
      Play Again
    </button>
  );
};

export const GameOver = ({ answer, count, onPlayAgain, won }: GameOverProps) => {
  if (won) {
    return (
      <>
        <Winner count={count} />
        <PlayAgain onClick={onPlayAgain} />
      </>
    );
  }
  if (count == 10) {
    return (
      <>
        <Loser answer={answer} />
        <PlayAgain onClick={onPlayAgain} />
      </>
    );
  }
  return null;
};
