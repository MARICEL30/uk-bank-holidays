import React, { useState } from "react";
import "./App.css";
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
    <body className="App">
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
    </body>
  );
};
export default App;

// check what day is today
//convert today's date into the right string date
//Check the property date in every object in the array events
// iterate trhough every property date
//according to todays date return an array with the dates starting from today date

//Implement the buttons controls
//Render the data according to the buttons controls values
