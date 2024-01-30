import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cx } from "../utils";

interface ToggleButtonProps {
  css: string; // border
  newTheme: string;
  text: string;
}

function ToggleButton({ css, text, newTheme }: ToggleButtonProps) {
  // light, dark, system
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={cx(
        css,
        theme === newTheme
          ? "text-blue-800 bg-gray-100 dark:text-blue-300 dark:bg-gray-600"
          : "bg-white dark:bg-gray-500",
        "px-2 py-1 border-gray-400",
        "hover:bg-gray-200 hover:text-blue-700",
        "dark:hover:bg-gray-700 dark:hover:text-blue-400",
        "focus:text-blue-700"
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
    <div className="inline-flex text-sm font-medium text-gray-800 dark:text-gray-200">
      <ToggleButton
        css="rounded-l-lg border border-r-0"
        text="Light"
        newTheme="light"
      />
      <ToggleButton css="rounded-r-lg border" text="Dark" newTheme="dark" />
    </div>
  );
}
