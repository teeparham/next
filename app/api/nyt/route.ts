import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const apiKey = process.env.NYT_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "NYT_API_KEY is not set in environment variables" },
      { status: 500 }
    );
  }

  const period = 7; // 1, 7, or 30 (days)
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json?api-key=${apiKey}`;

  try {
    const response = await fetch(url);
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
