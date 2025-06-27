import React from "react";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../Card.styled";
import { useDaysRequest } from "../../api/useDaysRequest";

type ReturnProps = {
  events: Array<{}>;
  date: string;
  title: string;
  id: number;
};

export const NorthernIrelandData = () => {
  const { data, error, isLoading } = useDaysRequest();

  if (isLoading && !data) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      <h1> Northern Ireland</h1>
      {data?.["northern-ireland"] &&
        // eslint-disable-next-line array-callback-return
        data["northern-ireland"].events.map((item: ReturnProps) => {
          let todaysDate = new Date().toISOString().split("T")[0];

          if (item.date && item.date > todaysDate)
            return (
              <CardContainer key={item.id}>
                <Card>
                  <CardFirstHeader>Next Bank Holiday </CardFirstHeader>
                  <CardSecondHeader>{item.title}</CardSecondHeader>
                  <CardThirdHeader>{item.date} </CardThirdHeader>
                </Card>
              </CardContainer>
            );
        })}
    </section>
  );
};
