import React from "react";
import {
  Card,
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../Card.styled";
import { useDaysRequest } from "../../api/useDaysRequest";
import { RegionBanner } from "../RegionBanner";

type ReturnProps = {
  events: Array<{}>;
  id: string;
  date: string;
  title: string;
};

export const ScotlandData = () => {
  let { data: ReturnApiProps, error, isLoading } = useDaysRequest();

  if (isLoading && !ReturnApiProps) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      <RegionBanner title={"Scotland"} />
      {ReturnApiProps?.["scotland"] &&
        // eslint-disable-next-line array-callback-return
        ReturnApiProps["scotland"].events.map((item: ReturnProps) => {
          let todaysDate = new Date().toISOString().split("T")[0];

          if (item.date && item.date > todaysDate)
            return (
              <CardContainer>
                <Card key={item.id}>
                  <CardFirstHeader>Next Bank Holiday</CardFirstHeader>
                  <CardSecondHeader>{item.title}</CardSecondHeader>
                  <CardThirdHeader>
                    {item.date.split("-").reverse().join("-")}{" "}
                  </CardThirdHeader>
                </Card>
              </CardContainer>
            );
        })}
    </section>
  );
};
