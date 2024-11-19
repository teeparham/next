import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home", () => {
  it("renders", () => {
    render(<Home />);
    expect(screen.getByText("Experience")).toBeInTheDocument();
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });
});
