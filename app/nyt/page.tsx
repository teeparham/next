import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";

export default async function NytPage() {
  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">
          New York Times
        </h1>
        <PageFooter />
      </div>
    </main>
  );
}
