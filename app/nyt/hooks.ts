import { useQuery } from "@tanstack/react-query";
import { ValidDays } from "./DayButton";

export type MediaType = {
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

export interface ArticleType {
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

async function getArticles(days: ValidDays): Promise<Array<ArticleType>> {
  const response = await fetch(`/api/nyt?days=${days}`);
  const json = await response.json();
  return json.results;
}

export function useArticles(days: ValidDays) {
  return useQuery({
    queryKey: ["nyt-articles", days],
    queryFn: () => getArticles(days),
    staleTime: 180_000, // 3 minutes
  });
}

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
