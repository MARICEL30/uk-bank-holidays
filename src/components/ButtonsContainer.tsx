import React, { useState } from "react";
import { ButtonGroup } from "./ButtonsContainer.styled";
import { EnglandAndWalesData } from "./EnglandAndWales/EnglandAndWalesData";
import { ScotlandData } from "./Scotland/ScotlandData";
import { NorthernIrelandData } from "./NorthernIreland/NorthernIrelandData";

type Props = {
  name: string;
  onClick: (value: string) => void;
  segments: Array<{
    key: number;
    value: string;
    label: string;
  }>;
};

export const segments = [
  {
    key: 1,

    value: "england-and-wales",

    label: "England and Wales",
  },

  {
    key: 2,

    value: "scotland",

    label: "Scotland",
  },

  {
    key: 3,
    value: "northern-ireland",

    label: "Northern-Ireland",
  },
];

export const ButtonsContainer = ({ name, segments }: Props) => {
  let [value, setValue] = useState("");

  return (
    <>
      {segments.map((item) => (
        <ButtonGroup key={item.key}>
          <button onClick={() => setValue(item.value)}>{item.label}</button>
        </ButtonGroup>
      ))}

      <div>
        {value === "england-and-wales" && (
          <EnglandAndWalesData events={[]} date={""} title={""} id={0} />
        )}

        {value === "scotland" && <ScotlandData />}
        {value === "northern-ireland" && <NorthernIrelandData />}
      </div>
    </>
  );
};
