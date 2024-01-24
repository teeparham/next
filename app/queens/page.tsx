"use client";
import { useState } from "react";
import { cx } from "../utils";
import { BackHeader } from "../components/BackHeader";
import { Board } from "./Board";

const css = {
  button: cx(
    "border-2 rounded-full py-2 px-4 text-3xl",
    "text-4xl font-extrabold",
    "bg-white border-black text-neutral-600",
    "hover:text-green-800"
  ),
};

export default function Page() {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <main className="container min-h-screen">
      <div className="my-8 mx-4 md:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">
          N Queens
        </h1>
        <div className="mb-6 text-sm">
          <p>
            &quot;The eight queens puzzle is the problem of placing eight chess
            queens on an 8×8 chessboard so that no two queens threaten each
            other; thus, a solution requires that no two queens share the same
            row, column, or diagonal. The eight queens puzzle is a special case
            of the more general n queens problem of placing n non-attacking
            queens on an n×n chessboard.&quot;
            <a
              className="mx-2 underline white underline-offset-2 hover:decoration-2"
              href="https://en.wikipedia.org/wiki/Eight_queens_puzzle"
            >
              Read more
            </a>
          </p>
          <p className="mt-2">
            Click the plus and minus buttons below to view solutions for N
            Queens.
          </p>
        </div>
        <div
          className={cx(
            "rounded-2xl border-2",
            "border-gray-700 dark:border-gray-200",
            "p-4 md:p-6",
            "bg-gray-300 dark:bg-gray-400"
          )}
        >
          <div className="mb-4">
            <button className={cx(css.button, "mr-2")} onClick={increment}>
              +
            </button>
            <button className={cx(css.button, "px-5")} onClick={decrement}>
              -
            </button>
            <span className="ml-4 text-white text-xl font-bold">
              {count} Queen{count > 1 ? "s" : ""}
            </span>
          </div>
          <Board count={count} />
        </div>
      </div>
    </main>
  );
}
