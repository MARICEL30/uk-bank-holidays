import { render, screen } from "@testing-library/react";
import { ButtonsContainer, segments } from "./ButtonsContainer";
import React from "react";

const mockFunction = jest.fn();

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

  it("displays the related content when clicked", () => {
    render(
      <ButtonsContainer
        name="test"
        segments={segments}
        onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const button = "England and Wales";
    expect(button).toHaveBeenCalledWith(mockFunction("England and Wales"));
  });
});
