import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { cx } from "./utils";
import { Providers } from "./components/Providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tee Parham",
  description: "Tee Parham portfolio site",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head />
      <body
        className={cx(
          openSans.className,
          "bg-neutral-100 text-neutral-900",
          "dark:bg-neutral-800 dark:text-neutral-300"
        )}
      >
        <Providers>{children}</Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
