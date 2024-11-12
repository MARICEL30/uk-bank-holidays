import React from "react";
import { Button, ButtonContainer } from "../SegmentedControls1.styled";

type Props = {
  firstSegment: string;
  secondSegment: string;
};

export const SegmentedControls1 = ({ firstSegment, secondSegment }: Props) => {
  return (
    <ButtonContainer>
      <Button>{firstSegment}</Button>
      <Button>{secondSegment} </Button>
    </ButtonContainer>
  );
};
