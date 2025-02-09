"use server";

export interface PlayerDetailType {
  threeMonthRating: string;
  singlesUTR: string;
  doublesUTR: string;
}

export async function getPlayerDetail(
  id: number
): Promise<PlayerDetailType | null> {
  const data = await fetch(`https://api.utrsports.net/v1/player/${id}/profile`);
  const detail: PlayerDetailType | null = await data.json();
  return detail;
}
