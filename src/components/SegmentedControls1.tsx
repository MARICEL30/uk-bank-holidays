import React from "react";
import { Button, ButtonContainer } from "../SegmentedControls1.styled";

type Props = {
  firstButton: string;
  secondButton: string;
};

export const SegmentedControls1 = ({ firstButton, secondButton }: Props) => {
  return (
    <ButtonContainer>
      <Button>{firstButton}</Button>
      <Button>{secondButton} </Button>
    </ButtonContainer>
  );
};
