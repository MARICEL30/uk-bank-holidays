import React from "react";
import {
  Text,
  ButtonContainer,
  SegmentsContainer,
} from "../SegmentsContainer.styled";

type Props = {
  onChange: () => void;
  name: string;
  segments: Array<{
    value: string;
    key: number;
    label: string;
  }>;
};

export const SegmentedControls = ({ onChange, name, segments }: Props) => {
  return (
    <SegmentsContainer>
      {segments.map((item) => (
        <ButtonContainer>
          <Text key={item.key} onChange={() => {}}>
            {item.value}
          </Text>
        </ButtonContainer>
      ))}
    </SegmentsContainer>
  );
};
