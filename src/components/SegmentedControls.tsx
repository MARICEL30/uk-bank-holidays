import React from "react";
import {
  SegmentedControlsContainer,
  Segments,
} from "../SegmentedControlsContainer.styled";

type Props = {
  name: string;
  selectedValue: () => void;
  segments: Array<{
    value: string | number | readonly string[] | undefined;
    key: React.Key | null | undefined;
    label: string;
  }>;
};

export const SegmentedControls = ({ name, selectedValue, segments }: Props) => {
  return (
    <SegmentedControlsContainer>
      <Segments>
        {segments.map((item) => (
          <div>
            <input key={item.key} value={item.value}></input>
          </div>
        ))}
      </Segments>
    </SegmentedControlsContainer>
  );
};
