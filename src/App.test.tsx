// App.test.js
import { screen } from "@testing-library/react";
import { renderWithQueryClient } from "./utils";
import App from "./App";
import React from "react";

test("renders app component with correct text", async () => {
  renderWithQueryClient(<App />, undefined);
  const textElement = await screen.findByText(/UK Bank Holidays/i);
  expect(textElement).toBeInTheDocument();
});
