import React, { useState } from "react";
import {
  Input,
  Label,
  RadioGroup,
  SegmentsContainer,
} from "../SegmentsContainer.styled";
import { EnglandAndWalesData } from "./EnglandAndWales/EnglandAndWalesData";
import { ScotlandData } from "./ScotlandData";
import { NorthernIrelandData } from "./NorthernIrelandData";

type Props = {
  name: string;
  onChange: (value: string) => void;
  segments: Array<{
    key: number;
    value: string;
    label: string;
  }>;
  defaultIndex?: number;
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
  defaultIndex = 0,
}: Props) => {
  const [value, setValue] = useState<string>(segments[defaultIndex].value);
  const [showList, setShowList] = useState<string[]>([]);

  return (
    <SegmentsContainer>
      {segments.map((item) => (
        <RadioGroup key={item.key}>
          <Input
            type="radio"
            value={item.value}
            id={item.label}
            name={name}
            onChange={() => {
              if (showList.includes(item.value)) {
                setShowList([]);
              } else {
                setShowList([item.value]);
              }
            }}
          />

          <Label key={item.key} htmlFor={item.label}>
            {item.label}
          </Label>
        </RadioGroup>
      ))}
    </SegmentsContainer>
  );
};
