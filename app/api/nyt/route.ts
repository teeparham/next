import { NextResponse } from "next/server";

function getDaysFromParams(url: string): number {
  const { searchParams } = new URL(url);
  const days = parseInt(searchParams.get("days") || "1", 10);
  return [1, 7, 30].includes(days) ? days : 1;
}

export async function GET(request: Request) {
  const apiKey = process.env.NYT_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "NYT_API_KEY is not set in environment variables" },
      { status: 500 }
    );
  }

  const days = getDaysFromParams(request.url);
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${days}.json?api-key=${apiKey}`;

  try {
    const response = await fetch(url, {
      next: { revalidate: 900 },
      cache: "force-cache",
    });
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch data from NYT API" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while fetching data" },
      { status: 500 }
    );
  }
}
