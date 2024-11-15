import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useDaysRequest } from "./components/useDaysRequest";
import { SegmentedControls } from "./components/SegmentedControls";

const segments = [
  { key: 1, value: "England and Wales" },
  { key: 2, value: "All" },
];

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();

  if (isLoading) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <div className="App">
      <body className="body-container">
        <Header title="UK Bank Holidays" />
        <SegmentedControls
          name={""}
          selectedValue={function (): void {
            throw new Error("Function not implemented.");
          }}
          segments={[
            {
              key: 1,
              value: "England and Wales",
              label: "",
            },
            {
              key: 2,
              value: "All",
              label: "",
            },
          ]}
        />

        <section>
          {returnValues &&
            returnValues["england-and-wales"].events.map((item: any) => {
              let todaysDate = new Date().toISOString().split("T")[0];

              // let datesArray = returnValues["england-and-wales"].events.map(
              //   (date: any) => date
              // );

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
