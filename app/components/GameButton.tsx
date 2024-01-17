import { SyntheticEvent } from "react";

interface GameButtonProps {
  disabled?: boolean;
  onClick: (event: SyntheticEvent) => void;
  text: string;
}

const CSS = `rounded-3xl border-4 border-black 
  px-3 py-2 ml-2 md:ml-3 
  text-lg font-semibold text-green-900 bg-gray-200`;

export function GameButton({ disabled, onClick, text }: GameButtonProps) {
  return (
    <button className={CSS} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}
