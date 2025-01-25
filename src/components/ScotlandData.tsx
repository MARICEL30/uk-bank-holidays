import React, { useState } from "react";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../Card.styled";
import { useDaysRequest } from "./useDaysRequest";

export const ScotlandData = () => {
  let { data: returnValues, error, isLoading } = useDaysRequest();
  const [segmentsValue, setsegmentsValue] = useState("Scotland");

  if (isLoading) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      {returnValues &&
        // eslint-disable-next-line array-callback-return
        returnValues["Scotland"].events.map((item: any) => {
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
  );
};
