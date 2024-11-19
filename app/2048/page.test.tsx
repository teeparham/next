import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";
import crypto from "crypto";

// crypto is available in https browsers but not in node
Object.defineProperty(globalThis, "crypto", {
  value: {
    randomUUID: () => crypto.randomUUID(),
  },
});

describe("Page", () => {
  beforeEach(() => {
    // mock random to return 0.1 so that the tile values are always 2
    jest.spyOn(Math, "random").mockReturnValue(0.1);
  });

  it("renders", () => {
    const { getByText } = render(<Page />);
    expect(getByText("2048")).toBeInTheDocument();
    expect(getByText("SCORE")).toBeInTheDocument();
    expect(getByText("BEST")).toBeInTheDocument();
  });

  it("renders 2 tiles", () => {
    const { getAllByText } = render(<Page />);
    const items = getAllByText("2");
    expect(items).toHaveLength(2);
  });
});
