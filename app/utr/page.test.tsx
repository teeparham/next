import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResultsPage from "./page";
import { getPlayers, Source } from "../api/getPlayers";

jest.mock("../api/getPlayers");
const mockGetPlayers = getPlayers as jest.MockedFunction<typeof getPlayers>;

const mockPlayers: Source[] = [
  {
    id: 1,
    displayName: "Tommy Paul",
    nationality: "USA",
    birthPlace: "New Jersey",
  },
  {
    id: 2,
    displayName: "Coco Gauff",
    nationality: "USA",
    birthPlace: "Georgia",
  },
];

describe("SearchResultsPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the page initially", async () => {
    const searchParams = { q: "" };

    const page = await SearchResultsPage({
      searchParams: Promise.resolve(searchParams),
    });
    const { getByText } = render(page);

    expect(getByText("UTR")).toBeInTheDocument();
    expect(getByText("Powered by UTR Sports")).toBeInTheDocument();
  });

  it("displays empty results", async () => {
    const searchParams = { q: "none" };
    mockGetPlayers.mockResolvedValue([]);

    const page = await SearchResultsPage({
      searchParams: Promise.resolve(searchParams),
    });
    const { getByText } = render(page);

    expect(getByText("No players found")).toBeInTheDocument();
    expect(mockGetPlayers).toHaveBeenCalledWith("none");
  });

  it("renders search results", async () => {
    const searchParams = { q: "paul" };
    mockGetPlayers.mockResolvedValue(mockPlayers);

    const page = await SearchResultsPage({
      searchParams: Promise.resolve(searchParams),
    });
    const { getByText } = render(page);

    expect(mockGetPlayers).toHaveBeenCalledWith("paul");
    expect(getByText("Tommy Paul")).toBeInTheDocument();
  });
});
