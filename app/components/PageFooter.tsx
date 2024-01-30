import { ThemeSwitch } from "./ThemeSwitch";

export function PageFooter() {
  return (
    <section className="my-12">
      <hr className="mb-6 border-gray-800 dark:border-gray-200" />
      <ThemeSwitch />
    </section>
  );
}
