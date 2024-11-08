import { useContext } from "react";
import { GameContext } from "./GameContext";
import styles from "./styles/splash.module.css";
import { GameButton } from "../components/GameButton";

export function Splash({ heading = "You won!", type = "" }) {
  const { startGame } = useContext(GameContext);

  return (
    <div className={`${styles.splash} ${type === "won" && "bg-transparent"}`}>
      <div>
        <h1 className="mb-8 text-gray-100 drop-shadow-2xl">{heading}</h1>
        <GameButton onClick={startGame} text="Play again" />
      </div>
    </div>
  );
}
