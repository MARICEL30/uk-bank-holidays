import React from "react";
import { ButtonContainer } from "../SegmentedControls1.styled";

type Props = {
  firstButton: string;
  secondButton: string;
};

export const SegmentedControls1 = ({ firstButton, secondButton }: Props) => {
  return (
    <ButtonContainer>
      <button>{firstButton}</button>
      <button>{secondButton} </button>
    </ButtonContainer>
  );
};
