import { cx } from "../utils";

interface FilterButtonProps {
  position?: string; // first, last
  selected: boolean;
  setFilter: (value: string) => void;
  text: string;
}

export function FilterButton({
  position,
  selected,
  setFilter,
  text,
}: FilterButtonProps) {
  const round =
    position === "first"
      ? "sm:rounded-l-lg sm:border-r-0"
      : position === "last"
        ? "sm:rounded-r-lg"
        : "sm:border-r-0";

  const highlight =
    selected && "text-blue-700 dark:text-blue-400 bg-white dark:bg-neutral-900";

  return (
    <button
      className={cx(
        "px-2 py-1",
        "border border-neutral-400 bg-neutral-200 dark:bg-neutral-700",
        "hover:bg-neutral-200 hover:text-blue-700",
        "dark:hover:bg-neutral-600 dark:hover:text-blue-400",
        round,
        highlight
      )}
      onClick={() => {
        setFilter(text);
      }}
    >
      {text}
    </button>
  );
}
