"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { cx } from "../utils";

export function ThemeSwitch() {
  // light, dark, system
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // only show on client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="inline-flex text-sm font-medium">
      <button
        className={cx(
          "rounded-l-lg border border-r-0",
          "px-2 py-1 border-neutral-400",
          "text-neutral-800 bg-neutral-100",
          theme === "dark" && "hover:bg-neutral-200 hover:text-blue-700"
        )}
        onClick={() => {
          setTheme("light");
        }}
      >
        Light
      </button>

      <button
        className={cx(
          "rounded-r-lg border",
          "px-2 py-1 border-neutral-400",
          "text-neutral-200 bg-neutral-700",
          theme === "light" && "hover:bg-neutral-600 hover:text-blue-400"
        )}
        onClick={() => {
          setTheme("dark");
        }}
      >
        Dark
      </button>
    </div>
  );
}
