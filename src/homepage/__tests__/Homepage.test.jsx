import { render, screen } from "@testing-library/react";
import Homepage from "../homepage";

test("testing for rendering of header", () => {
  render(<Homepage />);
  const title = screen.getByTestId("myTitle");
  expect(title).toBeInTheDocument();
});
