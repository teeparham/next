import Link from "next/link";
import { Arrow } from "./Arrow";

interface GameSummaryProps {
  children: React.ReactNode;
  href: string;
  title: string;
}

export function GameSummary({ children, href, title }: GameSummaryProps) {
  return (
    <div className="mb-3">
      <Link
        href={href}
        className="group block text-blue-900 dark:text-blue-400"
      >
        {title}&nbsp;
        <Arrow />
      </Link>
      <div>{children}</div>
    </div>
  );
}
