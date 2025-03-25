import React from "react";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../../Card.styled";
import { useDaysRequest } from "../../api/useDaysRequest";

type ReturnProps = {
  id: string;
  date: string;
  title: string;
};

export const EnglandAndWalesData = ({ id, date, title }: ReturnProps) => {
  let { data: EnglandAndWales, error, isLoading } = useDaysRequest();

  if (isLoading && !EnglandAndWales) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      <h1> England data</h1>
      {EnglandAndWales &&
        // eslint-disable-next-line array-callback-return
        EnglandAndWales.division["england-and-wales"].events.map(
          (item: ReturnProps) => {
            let todaysDate = new Date().toISOString().split("T")[0];

            if (item.date && item.date > todaysDate)
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
