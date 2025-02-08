import { PageFooter } from "../components/PageFooter";
import { SearchForm } from "./SearchForm";

interface Source {
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

function SearchResult({ id, displayName, nationality, birthPlace }: Source) {
  return (
    <div key={id} className="my-2 hover:bg-gray-50">
      <span className="text-lg mr-2">{displayName}</span>
      <span className="text-sm mr-2">{birthPlace}</span>
      <span className="text-sm">{nationality}</span>
    </div>
  );
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
        <h1 className="mb-4 text-3xl text-blue-800 dark:text-blue-400">UTR</h1>
        <SearchForm />
        {players.length ? (
          <div>
            {players.map((player) => (
              <SearchResult {...player} />
            ))}
          </div>
        ) : (
          query !== "" && <NoPlayersFound />
        )}
        <PageFooter />
      </div>
    </main>
  );
}
