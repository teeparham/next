import { BackHeader } from "../components/BackHeader";
import { PageFooter } from "../components/PageFooter";
import { SearchForm } from "./SearchForm";
import { SearchResult } from "./SearchResult";

export interface Source {
  id: number;
  displayName: string;
  nationality: string;
  birthPlace: string;
}

interface Hit {
  source: Source;
}

interface SearchResultsPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

async function getPlayers(query: string): Promise<Array<Source>> {
  if (query === "") {
    return [];
  }
  const data = await fetch(
    `https://api.utrsports.net/v2/search?query=${encodeURIComponent(query)}&top=10&skip=0`
  );
  const json = await data.json();
  const hits: Array<Hit> = json.players.hits;
  const players: Array<Source> = hits.map((hit) => hit.source);
  return players;
}

function NoPlayersFound() {
  return <div className="text-center py-4">No players found</div>;
}

export default async function SearchResultsPage({
  searchParams,
}: SearchResultsPageProps) {
  const queryParam = (await searchParams).q;
  const query = Array.isArray(queryParam) ? queryParam[0] : queryParam || "";
  const players = await getPlayers(query);

  return (
    <main className="container min-h-screen overflow-x-hidden">
      <div className="my-8 mx-4 sm:mx-8 lg:mx-auto max-w-3xl">
        <BackHeader />
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">UTR</h1>
        <SearchForm />
        {players.length ? (
          <div>
            {players.map((player) => (
              <SearchResult key={player.id} {...player} />
            ))}
          </div>
        ) : (
          query !== "" && <NoPlayersFound />
        )}
        <h5 className="mt-8 text-neutral-500 dark:text-neutral-400">
          Powered by UTR Sports
        </h5>
        <PageFooter />
      </div>
    </main>
  );
}
