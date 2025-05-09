"use client";

import { useEffect, useState } from "react";
import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";
import { Article } from "./Article";
import { DayButton, ValidDays } from "./DayButton";

// example result:
// {
//   "uri": "nyt://article/08082b14-76e2-5b08-987d-6616cc4cf1de",
//   "url": "https://www.nytimes.com/2025/04/18/us/politics/irs-scott-bessent-elon-musk.html",
//   "id": 100000010118066,
//   "asset_id": 100000010118066,
//   "source": "New York Times",
//   "published_date": "2025-04-18",
//   "updated": "2025-04-18 21:08:15",
//   "section": "U.S.",
//   "subsection": "Politics",
//   "nytdsection": "u.s.",
//   "adx_keywords": "Government Employees;United States Politics and Government;Bessent, Scott;Shapley, Gary;Musk, Elon;Trump, Donald J;Internal Revenue Service;Treasury Department",
//   "column": null,
//   "byline": "By Jonathan Swan, Andrew Duehren, Alan Rappeport and Maggie Haberman",
//   "type": "Article",
//   "title": "Head of I.R.S. Is Ousted in Treasury’s Power Struggle With Elon Musk",
//   "abstract": "Treasury Secretary Scott Bessent complained to President Trump that the acting commissioner had been installed without his knowledge.",
//   "des_facet": [
//       "Government Employees",
//       "United States Politics and Government"
//   ],
//   "org_facet": [
//       "Internal Revenue Service",
//       "Treasury Department"
//   ],
//   "per_facet": [
//       "Bessent, Scott",
//       "Shapley, Gary",
//       "Musk, Elon",
//       "Trump, Donald J"
//   ],
//   "geo_facet": [],
//   "media": [
//       {
//           "type": "image",
//           "subtype": "photo",
//           "caption": "Gary Shapley, a longtime I.R.S. agent, was lauded by conservatives after he publicly argued that the Justice Department had slow-walked its investigation into Hunter Biden’s taxes.",
//           "copyright": "Al Drago for The New York Times",
//           "approved_for_syndication": 1,
//           "media-metadata": [
//               {
//                   "url": "https://static01.nyt.com/images/2025/04/18/multimedia/18dc-bessent-musk-topart-jqpw/18dc-bessent-musk-topart-jqpw-thumbStandard.jpg",
//                   "format": "Standard Thumbnail",
//                   "height": 75,
//                   "width": 75
//               },
//               {
//                   "url": "https://static01.nyt.com/images/2025/04/18/multimedia/18dc-bessent-musk-topart-jqpw/18dc-bessent-musk-topart-jqpw-mediumThreeByTwo210.jpg",
//                   "format": "mediumThreeByTwo210",
//                   "height": 140,
//                   "width": 210
//               },
//               {
//                   "url": "https://static01.nyt.com/images/2025/04/18/multimedia/18dc-bessent-musk-topart-jqpw/18dc-bessent-musk-topart-jqpw-mediumThreeByTwo440.jpg",
//                   "format": "mediumThreeByTwo440",
//                   "height": 293,
//                   "width": 440
//               }
//           ]
//       }
//   ],
//   "eta_id": 0
// }

type MediaType = {
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  "media-metadata": Array<{
    url: string;
    format: string;
    height: number;
    width: number;
  }>;
};

interface ArticleType {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: Array<MediaType>;
  eta_id: number;
}

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
  const [articles, setArticles] = useState<Array<ArticleType>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [days, setDays] = useState<ValidDays>(1);

  const fetchPopular = async (days: number) => {
    setLoading(true);
    setArticles([]);

    const response = await fetch(`/api/nyt?days=${days}`);
    if (!response.ok) {
      const message =
        response.status === 429 ? "Too many requests" : "Fetch failed";
      setError(message);
      return;
    }
    try {
      const data = await response.json();
      setArticles(data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPopular(days);
  }, [days]);

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
        {error && <p className="text-red-600 text-2xl my-4">Error: {error}</p>}
        {!error && loading && (
          <Article
            abstract="&nbsp;"
            byline="&nbsp;"
            image_url="https://help.nytimes.com/hc/theming_assets/01HZPCK5BKMK9ZRNEE1Y6J1PHW"
            title="Loading..."
            url=""
          />
        )}
        {articles.map((a) => (
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
