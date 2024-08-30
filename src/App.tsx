import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useDaysRequest } from "./components/useDaysRequest";
import { SegmentedControls } from "./components/SegmentedControls";

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();

  if (isLoading) return "Loading...";

  if (error) {
    return "An error has occurred: " + error;
  }

  return (
    <div className="App">
      <body className="body-container">
        <Header title="UK Bank Holidays" />
        <SegmentedControls width={"300px"} height={""} />

        <section>
          {returnValues &&
            returnValues["england-and-wales"].events.map((item: any) => {
              return (
                <ul key={item.id}>
                  <li>{item.title}</li>
                  <li>{item.date}</li>
                </ul>
              );
            })}
        </section>
      </body>
    </div>
  );
};

export default App;
