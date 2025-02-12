import { SyntheticEvent } from "react";
import { cx } from "../utils";

interface GameButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  running?: boolean;
  onClick: (event: SyntheticEvent) => void;
}

export function GameButton({
  disabled,
  onClick,
  running,
  children,
}: GameButtonProps) {
  return (
    <button
      className={cx(
        "rounded-3xl border-4 border-black",
        "px-3 py-2",
        "text-lg font-semibold text-green-900 bg-white dark:bg-gray-200",
        running ? "cursor-progress" : !disabled && "cursor-pointer"
      )}
      disabled={disabled || running}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
