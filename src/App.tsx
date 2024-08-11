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
            returnValues["england-and-wales"].events.map((item: any) => (
              <div key={item.id}>
                <h1>{item["england-and-wales"].title}</h1>
                <h1>{item["england-and-wales"].date}</h1>
              </div>
            ))}
        </section>
      </body>
    </div>
  );
};

export default App;
