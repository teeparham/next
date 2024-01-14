import { SyntheticEvent } from "react";

interface GameOverProps {
  count: number;
  onPlayAgain: (event: SyntheticEvent) => void;
  won: boolean;
}

interface PlayAgainProps {
  onClick: (event: SyntheticEvent) => void;
}

const Winner = () => {
  return <div className="my-8">winner</div>;
};

const Loser = () => {
  return <div className="my-8">loser</div>;
};

const PlayAgain = ({ onClick }: PlayAgainProps) => {
  return (
    <button
      className="rounded-3xl border-4 border-black px-3 py-2 ml-3 text-lg font-semibold text-green-900 bg-gray-200"
      onClick={onClick}
    >
      Play Again
    </button>
  );
};

export const GameOver = ({ count, onPlayAgain, won }: GameOverProps) => {
  if (won) {
    return (
      <>
        <Winner />
        <PlayAgain onClick={onPlayAgain} />
      </>
    );
  }
  if (count == 10) {
    return (
      <>
        <Loser />
        <PlayAgain onClick={onPlayAgain} />
      </>
    );
  }
  return null;
};
