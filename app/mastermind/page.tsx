"use client";
import { Game } from "./Game";
import { cx } from "../utils";
import { BackHeader } from "../components/BackHeader";

export default function Page() {
  return (
    <main className="container min-h-screen">
      <div className="my-8 mx-4 md:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">
          Mastermind
        </h1>
        <div className="mb-6 text-sm">
          Guess the pattern of four colored dots. Click the circles to change
          colors, then click Guess. For each dot in the correct color and in the
          correct position, a black dot is shown. For each dot of the right
          color but in the wrong position, a white dot is shown.
          <a
            className="mx-2 underline white underline-offset-2 hover:decoration-2"
            href="https://en.wikipedia.org/wiki/Mastermind_(board_game)"
          >
            Read more
          </a>
        </div>
        <div
          className={cx(
            "rounded-2xl border-2",
            "border-gray-700 dark:border-gray-200",
            "p-4 md:p-6",
            "bg-gray-300 dark:bg-gray-500"
          )}
        >
          <Game />
        </div>
      </div>
    </main>
  );
}
