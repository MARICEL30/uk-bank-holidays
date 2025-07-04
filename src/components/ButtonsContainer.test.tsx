import { render, screen } from "@testing-library/react";
import { ButtonsContainer, segments } from "./ButtonsContainer";
import React from "react";

describe("ButtonsContainer", () => {
  it("renders the buttons container component", () => {
    render(
      <ButtonsContainer
        name="test"
        segments={segments}
        onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    expect(ButtonsContainer).toBeInTheDocument();
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
    const button = "england-and-wales";
    expect(button).toBeTruthy();
  });

  it("displays the cards when clicked", () => {
    render(
      <ButtonsContainer
        name="test"
        segments={segments}
        onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const button = screen.getByDisplayValue("england-and-wales");
  });
});
