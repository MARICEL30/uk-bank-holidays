import React, { useState } from "react";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../Card.styled";
import { useDaysRequest } from "../api/useDaysRequest";

interface ReturnProps {
  id: string;
  date: string;
  title: string;
}

type ScotlandDataProps = {
  division: "scotland";
  events: Array<[]>;
};

export const ScotlandData = ({ division, events }: ScotlandDataProps) => {
  let { data: ScotlandProps, error, isLoading } = useDaysRequest();
  const [segmentsValue, setsegmentsValue] = useState();

  if (isLoading && !ScotlandProps) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      {ScotlandProps &&
        // eslint-disable-next-line array-callback-return
        ScotlandProps.division["scotland"].events.map((item: ReturnProps) => {
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
