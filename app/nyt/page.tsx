"use client";

import { useState } from "react";
import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";
import { Article } from "./Article";
import { DayButton, ValidDays } from "./DayButton";
import { MediaType, useArticles } from "./hooks";

// images are height 293px, width 440px. 3x2
function getImageUrl(media: Array<MediaType>): string {
  if (!media.length) {
    return "";
  }
  const metadata = media[0]["media-metadata"];
  if (!metadata.length) {
    return "";
  }
  return metadata[metadata.length - 1].url;
}

export default function NytPage() {
  const [days, setDays] = useState<ValidDays>(1);
  const { status, data, error } = useArticles(days);

  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-6xl">
        <BackHeader />
        <h1 className="mb-6 text-3xl text-blue-800 dark:text-blue-400">
          New York Times Popular Articles
        </h1>
        <div className="mb-6 flex gap-4">
          <DayButton
            days={1}
            selectedDays={days}
            setDays={setDays}
            text="Today"
          />
          <DayButton
            days={7}
            selectedDays={days}
            setDays={setDays}
            text="Past week"
          />
          <DayButton
            days={30}
            selectedDays={days}
            setDays={setDays}
            text="Past month"
          />
        </div>
        {status === "error" && (
          <p className="text-red-600 text-2xl my-4">Error: {error.message}</p>
        )}
        {status === "pending" && (
          <Article
            abstract="&nbsp;"
            byline="&nbsp;"
            image_url="https://help.nytimes.com/hc/theming_assets/01HZPCK5BKMK9ZRNEE1Y6J1PHW"
            title="Loading..."
            url=""
          />
        )}
        {data &&
          data.map((a) => (
            <Article
              key={a.id}
              abstract={a.abstract}
              byline={a.byline}
              image_url={getImageUrl(a.media)}
              title={a.title}
              url={a.url}
            />
          ))}
        <PageFooter />
      </div>
    </main>
  );
}
