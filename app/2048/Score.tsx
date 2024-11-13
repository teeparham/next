import { useContext, useEffect, useState } from "react";
import { GameContext } from "./GameContext";
import { cx } from "../utils";

export function Score() {
  const [best, setBest] = useState(0);
  const { score } = useContext(GameContext);

  useEffect(() => {
    const bestScore = localStorage.getItem("2048.best");
    if (bestScore) {
      setBest(parseInt(bestScore, 10));
    }
  }, []);

  useEffect(() => {
    if (score > best) {
      setBest(score);
      localStorage.setItem("2048.best", score.toString());
    }
  }, [score, best]);

  return (
    <div
      className={cx(
        "w-[296px] sm:w-[480px]",
        "text-brown-200 bg-brown-400 text-center",
        "pt-2 sm:pt-4 rounded-t-lg font-bold text-lg sm:text-xl"
      )}
    >
      <div className="flex w-full">
        <div className="flex-1">
          <div>SCORE</div>
          <div>{score}</div>
        </div>
        <div className="flex-1 mx-8"></div>
        <div className="flex-1">
          <div>BEST</div>
          <div>{best}</div>
        </div>
      </div>
    </div>
  );
}
