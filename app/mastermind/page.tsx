"use client";
import { Game } from "./Game";
import { cx } from "../utils";
import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";

export default function Page() {
  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">
          Mastermind
        </h1>
        <p className="mb-6 text-sm">
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
        </p>
        <div
          className={cx(
            "sm:rounded-2xl border-2",
            "border-gray-700 dark:border-gray-200",
            "p-4 sm:p-6 -mx-6 sm:m-0",
            "bg-gray-300 dark:bg-gray-500"
          )}
        >
          <Game />
        </div>
        <p className="mt-8 text-yellow-200 min-[347px]:hidden">
          Sorry - the game does not fit well on narrow screens. Try rotating
          your device to get a wider screen.
        </p>
        <PageFooter />
      </div>
    </main>
  );
}
