import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SegmentedControlsEnglandandWalesall } from "./components/SegmentedControls";
import { useQuery } from "@tanstack/react-query";
import { Api } from "./components/Api";

// let myArray: Array<[]> = [];

// let myArray: string[] = [];

type DataResponse = Array<DataResponse>;

const App = () => {
  const { isLoading, error, data } = useQuery<DataResponse>();

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
          <h1>{data.events.title}</h1>
          {/* <h1>{data["england-and-wales"].events.title}</h1> */}
          {/* //  <h1>{data["division"]}</h1> */}
        </section>
      </body>
    </div>
  );
};

export default App;
