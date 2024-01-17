import { Inter } from "next/font/google";
import { cx } from "../utils";

const interFont = Inter({ subsets: ["latin"] });

interface ArrowProps {
  left?: boolean;
}

export function Arrow({ left }: ArrowProps) {
  return (
    <span
      className={cx(
        "inline-block transition-transform",
        "group-hover:translate-x-1 motion-reduce:transform-none",
        interFont.className
      )}
    >
      {left ? <>&lt;-</> : <>-&gt;</>}
    </span>
  );
}
