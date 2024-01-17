import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"] });

interface ArrowProps {
  left?: boolean;
}

const CSS = `inline-block transition-transform 
  group-hover:translate-x-1 motion-reduce:transform-none`;

export function Arrow({ left }: ArrowProps) {
  return (
    <span className={`${CSS} ${interFont.className}`}>
      {left ? <>&lt;-</> : <>-&gt;</>}
    </span>
  );
}
