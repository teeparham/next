interface LinkToProps {
  href: string;
  children: React.ReactNode;
}

export function LinkTo ({ href, children }: LinkToProps) {
  return (
    <a
      className="underline text-blue-900 dark:text-blue-300 underline-offset-2 hover:decoration-2"
      href={href}
      target="_blank"
    >
      {children}
    </a>
  );
};
