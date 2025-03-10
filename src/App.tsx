import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SegmentedControls, segments } from "./components/SegmentedControls";
import { EnglandAndWalesData } from "./components/EnglandAndWalesData";
import { useDaysRequest } from "./api";

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();

  const defaultValue = 0;
  const [value, setValue] = useState<string>(segments[defaultValue].value);

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
          onChange={() => setValue(value)}
          defaultValue={0}
        />
        {/* {returnValues === "england-and-wales"}

        <div>
          <EnglandAndWalesData />
        </div> */}
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
