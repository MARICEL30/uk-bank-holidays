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

export const EnglandAndWalesData = ({
  events,
  date,
  title,
  id,
}: ReturnProps) => {
  let { data: ReturnApiprops, error, isLoading } = useDaysRequest();

  if (isLoading && !ReturnApiprops) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      <h1> England data</h1>
      {ReturnApiprops?.["england-and-wales"] &&
        // eslint-disable-next-line array-callback-return
        ReturnApiprops["england-and-wales"].events.map((item: ReturnProps) => {
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
        })}
    </section>
  );
};
