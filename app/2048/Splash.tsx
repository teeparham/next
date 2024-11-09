import { useContext } from "react";
import { GameContext } from "./GameContext";
import styles from "./styles/splash.module.css";
import { GameButton } from "../components/GameButton";
import { cx } from "../utils";

interface SplashProps {
  type?: "won" | "lost";
  children: React.ReactNode;
}

export function Splash({ type = "lost", children }: SplashProps) {
  const { startGame } = useContext(GameContext);

  return (
    <div
      className={cx(
        styles.splash,
        "m-32 rounded-xl border-white border-4",
        type === "won" && "bg-green-500",
        type !== "won" && "bg-gray-400"
      )}
    >
      <div>
        <h1 className="mb-8 text-gray-100 drop-shadow-2xl">{children}</h1>
        <GameButton onClick={startGame}>Play again</GameButton>
      </div>
    </div>
  );
}
