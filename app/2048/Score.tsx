import { useContext } from "react";
import { GameContext } from "./GameContext";
import { cx } from "../utils";

export function Score() {
  const { score } = useContext(GameContext);

  return (
    <div
      className={cx(
        "w-[296px] sm:w-[480px]",
        "text-brown-200 bg-brown-400 text-center",
        "pt-2 sm:pt-4 rounded-t-lg font-bold text-lg sm:text-xl"
      )}
    >
      <div>SCORE</div>
      <div>{score}</div>
    </div>
  );
}
