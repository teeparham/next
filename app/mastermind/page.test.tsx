import { render, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

describe("Page", () => {
  it("renders", () => {
    const { getByText } = render(<Page />);
    expect(getByText("Mastermind")).toBeInTheDocument();
  });

  it("guesses", async () => {
    const { getAllByRole, getAllByTestId, getByText } = render(<Page />);
    // CodePegs
    expect(getAllByRole("button", { name: "" })).toHaveLength(4);

    const guess = getByText("Guess");
    fireEvent.click(guess);

    await waitFor(() => {
      expect(getAllByTestId("dot")).toHaveLength(4);
    });
  });
});
