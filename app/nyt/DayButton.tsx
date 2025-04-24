import { Dispatch, SetStateAction } from "react";
import { cx } from "../utils";

export type ValidDays = 1 | 7 | 30;

interface DayButtonProps {
  days: ValidDays;
  selectedDays: ValidDays;
  setDays: Dispatch<SetStateAction<ValidDays>>;
  text: string;
}

export function DayButton({
  days,
  selectedDays,
  setDays,
  text,
}: DayButtonProps) {
  return (
    <button
      className={cx(
        "px-4 py-2 rounded-2xl",
        selectedDays === days
          ? "bg-blue-500 text-white font-semibold"
          : "bg-neutral-200 text-black"
      )}
      onClick={() => {
        setDays(days);
      }}
    >
      {text}
    </button>
  );
}
