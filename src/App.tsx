import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SegmentedControls, segments } from "./components/SegmentedControls";
import { EnglandAndWalesData } from "./components/EnglandAndWales/EnglandAndWalesData";
import { useDaysRequest } from "./api";
import { ScotlandData } from "./components/ScotlandData";
import { NorthernIrelandData } from "./components/NorthernIrelandData";

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();

  const [value, setValue] = useState<string>(segments[0].value);

  if (isLoading) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <div className="App">
      <body className="body-container">
        <Header title="UK Bank Holidays" />
        <SegmentedControls
          name="buttons"
          segments={segments}
          onChange={() => {
            setValue(value);
          }}
          defaultIndex={0}
        />
        <EnglandAndWalesData events={[]} date={""} title={""} id={0} />
      </body>
    </div>
  );
};

export default App;

// check what day is today
//convert today's date into the right string date
//Check the property date in every object in the array events
// iterate trhough every property date
//according to todays date return an array with the dates starting from today date

//Implement the segmented controls
//Render the data according to the segmented controls values
