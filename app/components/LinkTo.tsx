import { cx } from "../utils";

interface LinkToProps {
  href: string;
  children: React.ReactNode;
}

export function LinkTo({ href, children }: LinkToProps) {
  return (
    <a
      className={cx(
        "underline underline-offset-2",
        "text-blue-900 dark:text-blue-300",
        "hover:decoration-2"
      )}
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
}
