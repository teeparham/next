"use client";
// import { Game } from "./Game";
import { cx } from "../utils";
import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";

export default function Page() {
  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">2048</h1>
        <p className="mb-6 text-sm">
          To win, merge tiles with the same numbers to reach the tile with the
          number 2048. Use the arrow keys to move all tiles in one direction
          (up, down, left, or right). When two tiles with the same number
          collide, they combine into one tile with their sum (2 + 2 = 4). Each
          move adds a new tile (usually a 2 or 4) in a random empty spot. You
          win if you create a 2048 tile. You lose if no moves are possible.
          <a
            className="mx-2 underline white underline-offset-2 hover:decoration-2"
            href="https://en.wikipedia.org/wiki/2048_(video_game)"
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
          todo
        </div>
        <PageFooter />
      </div>
    </main>
  );
}
