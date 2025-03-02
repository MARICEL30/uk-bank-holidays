import React, { useState } from "react";
import { Label, SegmentsContainer, Button } from "../SegmentsContainer.styled";
import { ScotlandData } from "./ScotlandData";

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
  // const [segmentsValue, setsegmentsValue] = useState(segments[0].value);

  return (
    <SegmentsContainer>
      {segments.map((item) => (
        <div>
          <label key={item.key} htmlFor={item.label}>
            {item.label}
          </label>

          <input name={item.value} onClick={() => console.log(item.value)} />
        </div>
      ))}
    </SegmentsContainer>
  );
};
// <input type="radio" id="contactChoice2" name="contact" value="phone" />
// <label for="contactChoice2">Phone</label>
