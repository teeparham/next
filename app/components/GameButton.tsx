import { SyntheticEvent } from "react";
import { cx } from "../utils";

interface GameButtonProps {
  disabled?: boolean;
  onClick: (event: SyntheticEvent) => void;
  text: string;
}

export function GameButton({ disabled, onClick, text }: GameButtonProps) {
  return (
    <button
      className={cx(
        "rounded-3xl border-4 border-black",
        "px-3 py-2 ml-2 md:ml-3",
        "text-lg font-semibold text-green-900 bg-white dark:bg-gray-200"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
