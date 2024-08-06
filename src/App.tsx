import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { SegmentedControlsEnglandandWalesall } from "./components/SegmentedControls";
import { useDaysRequest } from "./components/useDaysRequest";

const App = () => {
  const { data: Days, error, isLoading } = useDaysRequest("daysData");

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
          {Days &&
            Days["england-and-wales"].events.map((item: any) => (
              <div key={item.id}>
                <h1>{item.events.title}</h1>
                {/* <h1>{item["england-and-wales"].events.date}</h1> */}
                <h1>{item.events.date}</h1>
              </div>
            ))}
          {/* <h1>{data.events.title}</h1> */}
          {/* <h1>{data["england-and-wales"].events.title}</h1> */}
          {/* //  <h1>{data["division"]}</h1> */}
        </section>
      </body>
    </div>
  );
};

export default App;
