import React from "react";
import { SegmentsContainer } from "../SegmentsContainer.styled";

type Props = {
  onChange: () => void;
  name: string;
  segments: Array<{
    value: string;
    key: React.Key | null | undefined;
    label: string;
  }>;
};

export const SegmentedControls = ({ onChange, name, segments }: Props) => {
  return (
    <SegmentsContainer>
      {segments.map((item) => (
        <button onChange={() => {}}>
          <label>{item.value}</label>
        </button>
      ))}
    </SegmentsContainer>
  );
};
