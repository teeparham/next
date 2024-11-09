import { useContext } from "react";
import { GameContext } from "./GameContext";
import styles from "./styles/score.module.css";
import { cx } from "../utils";

export function Score() {
  const { score } = useContext(GameContext);

  return (
    <div className={cx(styles.score, "rounded-t-lg")}>
      Score
      <div>{score}</div>
    </div>
  );
}
