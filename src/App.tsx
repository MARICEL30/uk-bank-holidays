import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SegmentedControlsEnglandandWalesall } from "./components/SegmentedControls";
import { useDaysRequest } from "./components/useDaysRequest";

const error = {
  message: "This is an error",
};

type DataResponse = Array<DataResponse>;

const App = () => {
  const { isLoading, error, data } = useDaysRequest();

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="App">
      <body className="body-container">
        <Header />
        <br></br>
        <br></br>
        <br></br>
        <SegmentedControlsEnglandandWalesall width={""} height={""} />

        <section>
          {/* <h1>{data.events.title}</h1> */}
          {/* <h1>{data["england-and-wales"].events.title}</h1> */}
          {/* //  <h1>{data["division"]}</h1> */}
        </section>
      </body>
    </div>
  );
};

export default App;
