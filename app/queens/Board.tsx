import Image from "next/image";
import { cx } from "../utils";
import { solve } from "./Solver";

interface BoardProps {
  count: number;
}

interface SquareProps {
  even: boolean; // is the square in an even row
  queen: boolean;
}

interface SolutionProps {
  count: number;
}

interface RowProps {
  even: boolean; // for styling boxes
  index: number; // position of queen in row
  size: number;
}

function Queen() {
  return <Image src="queen.svg" height="32" width="32" alt="queen" />;
}

function Square({ even, queen }: SquareProps) {
  const background = even
    ? "bg-neutral-200 even:bg-neutral-400"
    : "bg-neutral-400 even:bg-neutral-200";
  return (
    <div className={cx(background, "inline-block h-8 w-8")}>
      {queen && <Queen />}
    </div>
  );
}

function Row({ even, index, size }: RowProps) {
  const colIndexes = Array.from({ length: size }, (_, i) => i);
  return (
    <div className="flex flex-row group">
      {colIndexes.map((col) => (
        <Square even={even} queen={col === index} key={col} />
      ))}
    </div>
  );
}

function Solution({ count }: SolutionProps) {
  return (
    <div>
      <h3 className="mb-2 text-green-800">A solution</h3>
      <div>
        {solve(count).map((value, index) => (
          <Row size={count} index={value} even={!(index % 2)} key={index} />
        ))}
      </div>
    </div>
  );
}

export function Board({ count }: BoardProps) {
  if (count === 1) {
    return (
      <>
        <h3 className="mb-2 text-green-800">The solution</h3>
        <Square even queen />
      </>
    );
  }
  if (count < 4) {
    return <h3 className="text-red-700">Impossible!</h3>;
  }
  return <Solution count={count} />;
}
