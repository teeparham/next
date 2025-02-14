"use client";

import { useState } from "react";
import { Source } from "./page";
import { getPlayerDetail, PlayerDetailType } from "../api/getPlayerDetail";

function PlayerDetail({ threeMonthRating }: PlayerDetailType) {
  return <span className="text-lg">{threeMonthRating || "-"}</span>;
}

export function SearchResult({
  id,
  displayName,
  nationality,
  birthPlace,
}: Source) {
  const [showDetails, setShowDetails] = useState(false);
  const [playerDetail, setPlayerDetail] = useState<any>(null);

  const handleShowDetails = async () => {
    setShowDetails(true);
    const detail = await getPlayerDetail(id);
    setPlayerDetail(detail);
  };

  return (
    <div key={id} className="my-2">
      <span className="text-lg mr-2">{displayName}</span>
      <span className="text-sm mr-2">{birthPlace}</span>
      <span className="text-sm">{nationality}</span>
      {showDetails ? (
        <span className="ml-4">
          {playerDetail ? <PlayerDetail {...playerDetail} /> : <>Loading...</>}
        </span>
      ) : (
        <button
          onClick={handleShowDetails}
          className="ml-4 px-2 py-1 text-sm 
            text-blue-800 dark:text-blue-300 rounded-lg border-2 
            border-gray-700 dark:border-gray-200"
        >
          Show
        </button>
      )}
      <a
        href={`https://app.utrsports.net/profiles/${id}`}
        className="ml-4 underline underline-offset-2"
        target="_blank"
      >
        Profile
      </a>
    </div>
  );
}
