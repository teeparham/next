import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./page";

describe("Home", () => {
  it("renders", () => {
    const { getByText } = render(<Home />);
    expect(getByText("Experience")).toBeInTheDocument();
    expect(getByText("Skills")).toBeInTheDocument();
  });
});
