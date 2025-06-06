import { useCallback, useContext, useEffect, useRef } from "react";
import { useSwipeable } from "react-swipeable";
import { GameContext, MoveDirection } from "./GameContext";
import { Splash } from "./Splash";
import { Tile, TileType } from "./Tile";
import { cx } from "../utils";
import { mergeAnimationDuration } from "./constants";

const cellIndexes = Array.from({ length: 16 }, (_, i) => i);

function Grid() {
  return (
    <div className={"flex flex-wrap rounded-b-lg bg-brown-400 p-1 sm:p-2"}>
      {cellIndexes.map((index) => (
        <div
          key={index}
          className={cx(
            "w-16 sm:w-[6.25rem] h-16 sm:h-[6.25rem] m-1 sm:m-2 rounded-md",
            "bg-brown-300"
          )}
        />
      ))}
    </div>
  );
}

export type SimulationType = null | "random" | "downs" | "rights";

type BoardProps = {
  simulate: SimulationType;
};

const randomDirections: Array<MoveDirection> = [
  "move_up",
  "move_down",
  "move_left",
  "move_right",
];

const downDirections: Array<MoveDirection> = [
  "move_down",
  "move_down",
  "move_down",
  "move_left",
  "move_right",
];

const rightDirections: Array<MoveDirection> = [
  "move_up",
  "move_down",
  "move_right",
  "move_right",
  "move_right",
];

export function Board({ simulate }: BoardProps) {
  const { getTiles, moveTiles, startGame, status } = useContext(GameContext);
  const initialized = useRef(false);
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => moveTiles("move_left"),
    onSwipedRight: () => moveTiles("move_right"),
    onSwipedUp: () => moveTiles("move_up"),
    onSwipedDown: () => moveTiles("move_down"),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // disable page scrolling with keyboard arrows
      e.preventDefault();

      switch (e.code) {
        case "ArrowUp":
          moveTiles("move_up");
          break;
        case "ArrowDown":
          moveTiles("move_down");
          break;
        case "ArrowLeft":
          moveTiles("move_left");
          break;
        case "ArrowRight":
          moveTiles("move_right");
          break;
      }
    },
    [moveTiles]
  );

  useEffect(() => {
    if (initialized.current === false) {
      startGame();
      initialized.current = true;
    }
  }, [startGame]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    function simulateMove() {
      if (status !== "ongoing") return;
      const directions =
        simulate === "random"
          ? randomDirections
          : simulate === "downs"
            ? downDirections
            : rightDirections;

      const direction =
        directions[Math.floor(Math.random() * directions.length)];
      moveTiles(direction);
    }

    if (simulate) {
      const interval = setInterval(simulateMove, mergeAnimationDuration + 25);
      return () => clearInterval(interval);
    }
  }, [simulate, moveTiles, status]);

  return (
    <div {...swipeHandlers} className={"w-[296px] sm:w-[480px] relative"}>
      {status === "won" && <Splash type="won">Winner!</Splash>}
      {status === "lost" && <Splash>Game over</Splash>}
      <div className={cx("m-1 sm:m-2", "absolute inset-0 z-10")}>
        {getTiles().map((tile: TileType) => (
          <Tile key={tile.id} {...tile} />
        ))}
      </div>
      <Grid />
    </div>
  );
}
