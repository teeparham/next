interface ClearButtonProps {
  onClick: () => void;
}

export function ClearButton({ onClick }: ClearButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute cursor-pointer rounded-full bg-neutral-300
                 right-3 top-1/2 -translate-y-1/2 w-5 h-5  
                 flex items-center justify-center"
      aria-label="Clear"
    >
      <span className="text-neutral-800 font-medium text-sm leading-none relative top-[-1px]">
        ×
      </span>
    </button>
  );
}
