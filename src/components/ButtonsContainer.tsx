import React, { useState } from "react";
import { Button, ButtonGroup, Container } from "./ButtonsContainer.styled";
import { EnglandAndWalesData } from "./EnglandAndWales/EnglandAndWalesData";
import { ScotlandData } from "./Scotland/ScotlandData";
import { NorthernIrelandData } from "./NorthernIreland/NorthernIrelandData";

type Props = {
  name: string;
  onClick: (value: string) => void;
  segments: Array<{
    id: number;
    value: string;
    label: string;
  }>;
};

export const segments = [
  {
    id: 1,
    value: "england-and-wales",
    label: "England and Wales",
  },

  {
    id: 2,
    value: "scotland",
    label: "Scotland",
  },

  {
    id: 3,
    value: "northern-ireland",
    label: "Northern Ireland",
  },
];

export const ButtonsContainer = ({ name, segments }: Props) => {
  let [value, setValue] = useState("");

  return (
    <>
      <Container>
        {segments.map((item) => (
          <ButtonGroup key={item.id}>
            <Button onClick={() => setValue(item.value)}>{item.label}</Button>
          </ButtonGroup>
        ))}
      </Container>

      <div>
        {value === "england-and-wales" && <EnglandAndWalesData />}
        {value === "scotland" && <ScotlandData />}
        {value === "northern-ireland" && <NorthernIrelandData />}
      </div>
    </>
  );
};
