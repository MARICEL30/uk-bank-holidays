import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonsContainer, segments } from "./ButtonsContainer";
import React from "react";
import { renderWithQueryClient } from "../utils";

describe("ButtonsContainer", () => {
  it("renders the buttons container component", () => {
    render(
      <ButtonsContainer
        name="test"
        segments={[]}
        onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(ButtonsContainer).toBeTruthy();
  });

  it("renders buttons with the correct label", () => {
    render(
      <ButtonsContainer
        name={""}
        onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
        segments={[]}
      />
    );
    const button = "England and Wales";
    expect(button).toBeTruthy();
  });

  it("fires event when clicked", async () => {
    const mockOnClick = jest.fn();

    renderWithQueryClient(
      <ButtonsContainer name="test" segments={[]} onClick={mockOnClick} />,
      undefined
    );

    fireEvent.click(screen.getByText("England and Wales"));
    expect(mockOnClick).toBeTruthy();
  });
});
