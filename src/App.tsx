import React, { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { useDaysRequest } from "./api/useDaysRequest";
import { SegmentedControls, segments } from "./components/SegmentedControls";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "./Card.styled";

const App = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();

  const [segmentsValue, setsegmentsValue] = useState(returnValues);
  const [checked, setchecked] = useState(true);

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
          onClick={() =>
            setsegmentsValue(
              returnValues["england-and-wales"]
                ? segments[0].value
                : segments[1].value
                ? segments[2].value
                : null
            )
          }
        />

        <section>
          {returnValues &&
            // eslint-disable-next-line array-callback-return
            returnValues["england-and-wales"].events.map((item: any) => {
              let todaysDate = new Date().toISOString().split("T")[0];

              if (item.date > todaysDate)
                return (
                  <CardContainer>
                    <Card key={item.id}>
                      <CardFirstHeader>Next Bank Holiday: </CardFirstHeader>
                      <CardSecondHeader>{item.title}</CardSecondHeader>
                      <CardThirdHeader>{item.date} </CardThirdHeader>
                    </Card>
                  </CardContainer>
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
