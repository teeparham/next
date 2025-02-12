"use server";

export interface PlayerDetailType {
  threeMonthRating: string;
}

export async function getPlayerDetail(
  id: number
): Promise<PlayerDetailType | null> {
  const data = await fetch(`https://api.utrsports.net/v1/player/${id}/profile`);
  const detail: PlayerDetailType | null = await data.json();
  return { threeMonthRating: detail?.threeMonthRating?.toString() || "" };
}
