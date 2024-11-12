import { useCallback, useContext, useEffect, useRef } from "react";
import { GameContext, MoveDirection } from "./GameContext";
import { Splash } from "./Splash";
import { Swiper, SwipeInput } from "./Swiper";
import { Tile, TileType } from "./Tile";
import styles from "./styles/board.module.css";
import { cx } from "../utils";
import { mergeAnimationDuration } from "./constants";

const cellIndexes = Array.from({ length: 16 }, (_, i) => i);

function Grid() {
  return (
    <div className={"flex flex-wrap rounded-b-lg bg-brown-400 p-1 sm:p-2"}>
      {cellIndexes.map((index) => (
        <div key={index} className={cx(styles.cell, "bg-brown-300")} />
      ))}
    </div>
  );
}

type BoardProps = {
  simulate: boolean;
};

const directions: Array<MoveDirection> = [
  "move_up",
  "move_down",
  "move_left",
  "move_right",
];

export function Board({ simulate }: BoardProps) {
  const { getTiles, moveTiles, startGame, status } = useContext(GameContext);
  const initialized = useRef(false);

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

  const handleSwipe = useCallback(
    ({ deltaX, deltaY }: SwipeInput) => {
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        if (deltaX > 0) {
          moveTiles("move_right");
        } else {
          moveTiles("move_left");
        }
      } else {
        if (deltaY > 0) {
          moveTiles("move_down");
        } else {
          moveTiles("move_up");
        }
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
      const direction = directions[Math.floor(Math.random() * 4)];
      moveTiles(direction);
    }

    if (simulate) {
      const interval = setInterval(simulateMove, mergeAnimationDuration + 25);
      return () => clearInterval(interval);
    }
  }, [simulate, moveTiles]);

  return (
    <Swiper onSwipe={handleSwipe}>
      <div className={cx(styles.board, "w-2048 relative")}>
        {status === "won" && <Splash type="won">Winner!</Splash>}
        {status === "lost" && <Splash>Game over</Splash>}
        <div className={cx(styles.tiles, "absolute inset-0 z-10")}>
          {getTiles().map((tile: TileType) => (
            <Tile key={tile.id} {...tile} />
          ))}
        </div>
        <Grid />
      </div>
    </Swiper>
  );
}
