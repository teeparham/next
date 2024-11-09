import { useContext } from "react";
import { GameContext } from "./GameContext";
import styles from "./styles/splash.module.css";
import { GameButton } from "../components/GameButton";
import { cx } from "../utils";

export function Splash({ heading = "You won!", type = "" }) {
  const { startGame } = useContext(GameContext);

  return (
    <div
      className={cx(
        styles.splash,
        "bg-gray-400 m-32 rounded-xl border-white border-4"
      )}
    >
      <div>
        <h1 className="mb-8 text-gray-100 drop-shadow-2xl">{heading}</h1>
        <GameButton onClick={startGame} text="Play again" />
      </div>
    </div>
  );
}
