import React, { useState } from "react";
import {
  Label,
  RadioGroup,
  SegmentsContainer,
} from "../SegmentsContainer.styled";
import { EnglandAndWalesData } from "./EnglandAndWalesData";
import { ScotlandData } from "./ScotlandData";
import { NorthernIrelandData } from "./NorthernIrelandData";

type Props = {
  name: string;
  onChange: () => void;
  segments: Array<{
    value: string;
    key: number;
    label: string;
  }>;
  defaultValue?: number;
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

export const SegmentedControls = ({
  name,
  segments,
  onChange,
  defaultValue = 0,
}: Props) => {
  const divStyle = { color: "blue" };
  const [value, setValue] = useState<string>(segments[defaultValue].value);

  return (
    <SegmentsContainer>
      {segments.map((item) => (
        <RadioGroup>
          <input
            type="radio"
            value={item.value}
            id={item.label}
            name={name}
            onChange={() => console.log(item.value)}
          />

          <label key={item.key} htmlFor={item.label}>
            {item.label}
          </label>
        </RadioGroup>
      ))}
    </SegmentsContainer>
  );
};
