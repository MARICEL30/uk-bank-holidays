import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useDaysRequest } from "./components/useDaysRequest";
import { SegmentedControls } from "./components/SegmentedControls";

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();
  const [segmentsValue, setsegmentsValue] = useState("England and Wales");

  if (isLoading) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <div className="App">
      <body className="body-container">
        <Header title="UK Bank Holidays" />
        <SegmentedControls
          name=""
          onChange={() => setsegmentsValue(segmentsValue)}
          segments={[
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
          ]}
        />

        <section>
          {returnValues &&
            returnValues["england-and-wales"].events.map((item: any) => {
              let todaysDate = new Date().toISOString().split("T")[0];

              if (item.date > todaysDate)
                return (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                    <h3>{item.date} </h3>
                  </div>
                );
            })}
        </section>
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
