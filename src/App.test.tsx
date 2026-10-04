// App.test.js
import { fireEvent, screen } from "@testing-library/react";
import { renderWithQueryClient } from "./utils";
import App from "./App";
import React from "react";

test("renders app component with correct text", async () => {
  renderWithQueryClient(<App />, undefined);
  const textElement = await screen.findByText(/UK Bank Holidays/i);
  expect(textElement).toBeInTheDocument();

  const scrollTo = jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  const backToTopButton = await screen.findByRole("button", {
    name: /back to top/i,
  });

  fireEvent.click(backToTopButton);

  expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: "smooth" });
  scrollTo.mockRestore();
});
