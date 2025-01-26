import React, { useState } from "react";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../Card.styled";
import { useDaysRequest } from "../api/useDaysRequest";

export const ScotlandData = () => {
  let { data: DataResponse, error, isLoading } = useDaysRequest();
  const [segmentsValue, setsegmentsValue] = useState("Scotland");

  if (isLoading && !DataResponse) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      {DataResponse &&
        // eslint-disable-next-line array-callback-return
        DataResponse.division["Scotland"].events.map(
          ({ item }: typeof DataResponse) => {
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
          }
        )}
    </section>
  );
};
