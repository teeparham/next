import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

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
  const colors = `bg-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300`;
  return (
    <html lang="en">
      <body className={`${openSans.className} ${colors}`}>{children}</body>
    </html>
  );
}
