import Link from "next/link";
import { Arrow } from "./Arrow";

export function BackHeader() {
  return (
    <Link
      className="block text-xl mb-4 text-neutral-900 dark:text-yellow-400"
      href="/"
    >
      <Arrow left />
      &nbsp;Tee Parham
    </Link>
  );
}
