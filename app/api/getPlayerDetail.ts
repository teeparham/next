"use server";

export interface PlayerDetailType {
  threeMonthRating: string;
  singlesUtr: string;
  doublesUtr: string;
}

function formatUtr(utr: string): string {
  if (!utr) return "";
  const nUtr = Number(utr);
  return nUtr % 1 === 0 ? `${nUtr}.x` : nUtr.toFixed(2);
}

export async function getPlayerDetail(id: number): Promise<PlayerDetailType> {
  const data = await fetch(
    `https://api.utrsports.net/v1/player/${id}/profile`,
    {
      next: { revalidate: 7200 },
      cache: "force-cache",
    }
  );
  const detail: PlayerDetailType | null = await data.json();
  return {
    threeMonthRating: detail?.threeMonthRating?.toString() || "",
    singlesUtr: formatUtr(detail?.singlesUtr || ""),
    doublesUtr: formatUtr(detail?.doublesUtr || ""),
  };
}
