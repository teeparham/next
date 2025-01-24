import { cx } from "../utils";

interface CodePegProps {
  colorIndex: number;
  enabled: boolean;
  index: number;
  onClick: (index: number) => void;
}

export const PEG_COLOR = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-white",
  "bg-yellow-400",
  "bg-purple-500",
];

export function CodePeg({ colorIndex, enabled, index, onClick }: CodePegProps) {
  function handleClick() {
    onClick(index);
  }

  return (
    <button
      className={cx(
        "cursor-pointer border-4 border-black rounded-full p-6 mr-2",
        PEG_COLOR[colorIndex]
      )}
      disabled={!enabled}
      onClick={handleClick}
    ></button>
  );
}
