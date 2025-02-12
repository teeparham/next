"use client";
import { useState } from "react";
import { BackHeader } from "../components/BackHeader";
import { GameButton } from "../components/GameButton";
import { PageFooter } from "../components/PageFooter";
import { Board, SimulationType } from "./Board";
import { GameProvider } from "./GameContext";
import { Score } from "./Score";

export default function Page() {
  const [simulate, setSimulate] = useState<SimulationType>(null);

  function toggleSimulate(type: SimulationType) {
    setSimulate(type);
    setTimeout(() => {
      setSimulate(null);
    }, 3000);
  }

  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">2048</h1>
        <p className="mb-6 text-sm">
          To win, merge tiles with the same numbers to reach the tile with the
          number 2048. Swipe or use the arrow keys to move all tiles in one
          direction. When two tiles with the same number collide, they combine
          into one tile with their sum (2 + 2 = 4). Each move adds a new tile
          (usually a 2 or 4) in a random empty spot. You win if you create a
          2048 tile. The game is over if no moves are possible.
          <a
            className="mx-2 underline white underline-offset-2 hover:decoration-2"
            href="https://en.wikipedia.org/wiki/2048_(video_game)"
          >
            Read more
          </a>
        </p>
        <GameProvider>
          <Score />
          <Board simulate={simulate} />
          <div className="mt-6">
            <div className="mr-2 inline">
              <GameButton
                onClick={() => toggleSimulate("random")}
                running={simulate !== null}
              >
                Random moves
              </GameButton>
            </div>
            <div className="mr-2 inline">
              <GameButton
                onClick={() => toggleSimulate("downs")}
                running={simulate !== null}
              >
                Downs
              </GameButton>
            </div>
            <div className="mr-2 inline">
              <GameButton
                onClick={() => toggleSimulate("rights")}
                running={simulate !== null}
              >
                Rights
              </GameButton>
            </div>
          </div>
        </GameProvider>
        <PageFooter />
      </div>
    </main>
  );
}
