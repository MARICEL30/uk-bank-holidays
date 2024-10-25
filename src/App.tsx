import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useDaysRequest } from "./components/useDaysRequest";
import { SegmentedControls1 } from "./components/SegmentedControls1";

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
        <SegmentedControls1
          firstButton="England and Wales"
          secondButton="All"
        />

        <section>
          {returnValues &&
            returnValues["england-and-wales"].events
              // .slice(65)
              .map((item: any) => {
                let currentDate = new Date().toJSON().slice(0, 10);
                let newArray = [...returnValues["england-and-wales"].events];
                // currentDate = newArray[65].date;

                return (
                  <div key={item.id}>
                    <h2>{item.title}</h2>
                    <h3>{item.date}</h3>
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
//according to todays date return an array with the dates starting from today date
