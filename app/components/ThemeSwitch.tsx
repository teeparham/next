import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cx } from "../utils";

interface ToggleButtonProps {
  css: string; // border
  newTheme: string;
  text: string;
}

function ToggleButton({ css, text, newTheme }: ToggleButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={cx(
        css,
        theme === newTheme ? "text-blue-800 bg-gray-100" : "bg-white",
        "px-2 py-1",
        "border-gray-400",
        "hover:bg-gray-200 hover:text-blue-700 focus:text-blue-700"
      )}
      onClick={() => {
        setTheme(newTheme);
      }}
    >
      {text}
    </button>
  );
}

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);

  // only show on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="inline-flex text-sm font-medium text-gray-800">
      <ToggleButton css="rounded-l-lg border" text="System" newTheme="system" />
      <ToggleButton css="border-t border-b" text="Light" newTheme="light" />
      <ToggleButton css="rounded-r-lg border" text="Dark" newTheme="dark" />
    </div>
  );
}
