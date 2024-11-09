import { useCallback, useContext, useEffect, useRef } from "react";
import { GameContext } from "./GameContext";
import { Splash } from "./Splash";
import { Swiper, SwipeInput } from "./Swiper";
import { Tile, TileType } from "./Tile";
import styles from "./styles/board.module.css";
import { cx } from "../utils";

const cellIndexes = Array.from({ length: 16 }, (_, i) => i);

function Grid() {
  return (
    <div className={cx(styles.grid, "rounded-b-lg")}>
      {cellIndexes.map((index) => (
        <div key={index} className={styles.cell} />
      ))}
    </div>
  );
}

export function Board() {
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

  return (
    <Swiper onSwipe={handleSwipe}>
      <div className={styles.board}>
        {status === "won" && <Splash heading="You won!" type="won" />}
        {status === "lost" && <Splash heading="You lost!" />}
        <div className={styles.tiles}>
          {getTiles().map((tile: TileType) => (
            <Tile key={tile.id} {...tile} />
          ))}
        </div>
        <Grid />
      </div>
    </Swiper>
  );
}
