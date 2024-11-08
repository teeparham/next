import { useContext } from "react";
import { GameContext } from "./GameContext";
import styles from "./styles/score.module.css";

export function Score() {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      Score
      <div>{score}</div>
    </div>
  );
}
