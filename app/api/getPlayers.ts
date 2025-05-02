export type Source = {
  id: number;
  displayName: string;
  nationality: string;
  birthPlace: string;
};

export async function getPlayers(query: string): Promise<Array<Source>> {
  if (!query) {
    return [];
  }

  const data = await fetch(
    `https://api.utrsports.net/v2/search?query=${encodeURIComponent(query)}&top=10&skip=0`,
    {
      next: { revalidate: 7200 },
      cache: "force-cache",
    }
  );

  if (!data.ok) {
    throw new Error("Failed to fetch players");
  }

  const json = await data.json();
  const hits = json.players.hits;
  return hits.map((hit: { source: Source }) => hit.source);
}
