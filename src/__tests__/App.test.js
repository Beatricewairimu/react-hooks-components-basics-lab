import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react"; // Added waitFor for async rendering

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", async () => {
  render(<App />);

  await waitFor(() => {
    // Ensure the navigation and its link are in the document
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByText("I'm a link!")).toBeInTheDocument();  // Adjusted to match actual link text
  });
});

