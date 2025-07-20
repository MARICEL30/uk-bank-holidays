import React, { useState } from "react";
import { Header } from "./components/Header";
import { ButtonsContainer, segments } from "./components/ButtonsContainer";
import { EnglandAndWalesData } from "./components/EnglandAndWales/EnglandAndWalesData";
import { useDaysRequest } from "./api";
import { ScotlandData } from "./components/Scotland/ScotlandData";
import { NorthernIrelandData } from "./components/NorthernIreland/NorthernIrelandData";

const App = () => {
  let { error, isLoading } = useDaysRequest();

  const [value, setValue] = useState("");

  if (isLoading) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <div className="body-container">
      <Header title="UK Bank Holidays" />
      <ButtonsContainer
        name=""
        segments={segments}
        onClick={() => {
          setValue(value);
        }}
      />
      <div className="data-container">
        {value === "england-and-wales" && <EnglandAndWalesData />}
        {value === "scotland" && <ScotlandData />}
        {value === "northern-ireland" && <NorthernIrelandData />}
      </div>
    </div>
  );
};
export default App;
