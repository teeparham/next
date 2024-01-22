import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cx } from "./utils";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tee Parham",
  description: "Tee Parham portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cx(
          openSans.className,
          "bg-neutral-200 text-neutral-700",
          "dark:bg-neutral-800 dark:text-neutral-300"
        )}
      >
        {children}
      </body>
    </html>
  );
}
