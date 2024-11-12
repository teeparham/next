import { useContext } from "react";
import { GameContext } from "./GameContext";
import styles from "./styles/score.module.css";
import { cx } from "../utils";

export function Score() {
  const { score } = useContext(GameContext);

  return (
    <div
      className={cx(
        styles.score,
        "w-2048",
        "pt-2 sm:pt-4 rounded-t-lg font-bold text-lg sm:text-xl"
      )}
    >
      <div>SCORE</div>
      <div>{score}</div>
    </div>
  );
}
