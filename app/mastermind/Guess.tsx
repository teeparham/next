import { COLOR } from "./CodePeg";
import { check } from "./CodeMaker";
import { cx } from "../utils";

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

interface HintsProps {
  answer: number[];
  right: number;
  rightColor: number;
}

function Dot({ color }: DotProps) {
  return (
    <div
      className={cx(
        "border-black border-2 rounded-full",
        "mx-2 sm:mx-3 px-3 inline-block",
        "bg-" + COLOR[color]
      )}
      data-testid="dot"
    >
      &nbsp;
    </div>
  );
}

function Cue({ color }: CueProps) {
  return (
    <div
      className={cx(
        "border-black border-2 rounded-full",
        "mx-1 md:mx-2 px-1 md:px-2 inline-block",
        "bg-" + color
      )}
    >
      &nbsp;
    </div>
  );
}

function CueList({ color, count }: CueListProps) {
  return [...Array(count)].map((_, i) => <Cue color={color} key={i} />);
}

function Hints({ answer, right, rightColor }: HintsProps) {
  if (!answer.length) return null;
  return (
    <>
      {right + rightColor == 0 && <div className="inline-block">None</div>}
      <CueList count={rightColor} color="white" />
      <CueList count={right} color="black" />
    </>
  );
}

export function Guess({ guess, answer }: GuessProps) {
  const result = answer.length ? check(guess, answer) : [0, 0];

  return (
    <div className="mb-3">
      <div className="mh-3 ml-1 md:ml-4 inline-block" />
      <Dot color={guess[0]} />
      <Dot color={guess[1]} />
      <Dot color={guess[2]} />
      <Dot color={guess[3]} />
      <div className="mr-8 inline-block" />
      <Hints answer={answer} right={result[0]} rightColor={result[1]} />
    </div>
  );
}
