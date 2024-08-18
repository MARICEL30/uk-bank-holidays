import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SegmentedControlsEnglandandWalesall } from "./components/SegmentedControls";
import { useDaysRequest } from "./components/useDaysRequest";

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();

  if (isLoading) return "Loading...";

  if (error) {
    return "An error has occurred: " + error;
  }

  return (
    <div className="App">
      <body className="body-container">
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <SegmentedControlsEnglandandWalesall width={""} height={""} />

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
