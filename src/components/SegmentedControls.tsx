import React from "react";
import { Label, SegmentsContainer, Button } from "../SegmentsContainer.styled";

type Props = {
  name: string;
  onClick: () => void;
  segments: Array<{
    value: string;
    key: number;
    label: string;
  }>;
};

export const segments = [
  {
    key: 1,

    value: "England and Wales",

    label: "England and Wales",
  },

  {
    key: 2,

    value: "Scotland",

    label: "Scotland",
  },

  {
    key: 3,

    value: "Northern-Ireland",

    label: "Northern-Ireland",
  },
];

export const SegmentedControls = ({ name, segments, onClick }: Props) => {
  return (
    <SegmentsContainer>
      {segments.map((item) => (
        <Button onClick={() => console.log("Lavida")}>
          <Label key={item.key}>{item.value}</Label>
        </Button>
      ))}
    </SegmentsContainer>
  );
};
