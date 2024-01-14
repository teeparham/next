import { COLOR } from "./CodePeg";
import { check } from "./CodeMaker";

interface DotProps {
  color: number;
}

interface CueProps {
  color: string;
}

interface CueListProps {
  color: string;
  count: number;
}

interface GuessProps {
  answer: number[];
  guess: number[];
}

const Dot = ({ color }: DotProps) => {
  return (
    <div
      className={
        "border-black border-2 mx-3 rounded-full px-3 inline-block bg-" +
        COLOR[color]
      }
    >
      &nbsp;
    </div>
  );
};

const Cue = ({ color }: CueProps) => {
  return (
    <div
      className={
        "border-black border-2 mx-2 rounded-full px-3 inline-block bg-" + color
      }
    >
      &nbsp;
    </div>
  );
};

const CueList = ({ color, count }: CueListProps) => {
  return [...Array(count)].map((_, i) => <Cue color={color} key={i} />);
};

export const Guess = ({ guess, answer }: GuessProps) => {
  const result = check(guess, answer);
  const right = result[0];
  const rightColor = result[1];

  return (
    <div className="mb-3">
      <div className="mh-3 ml-4 inline-block" />
      <Dot color={guess[0]} />
      <Dot color={guess[1]} />
      <Dot color={guess[2]} />
      <Dot color={guess[3]} />
      <div className="mr-8 inline-block" />
      {right + rightColor == 0 ? (
        <div className="inline-block"> none </div>
      ) : null}
      <CueList count={rightColor} color="white" />
      <CueList count={right} color="black" />
    </div>
  );
};