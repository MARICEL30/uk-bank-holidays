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
  date: string;
  title: string;
  id: number;
};

export const NorthernIrelandData = () => {
  const { data: ReturnApiprops, error, isLoading } = useDaysRequest();

  if (isLoading && !ReturnApiprops) return <p> Is Loading</p>;

  if (error) {
    return <p>An error has occurred!</p>;
  }

  return (
    <section>
      <RegionBanner title={"Northern Ireland"} />
      {ReturnApiprops?.["northern-ireland"] &&
        // eslint-disable-next-line array-callback-return
        ReturnApiprops["northern-ireland"].events.map((item: ReturnProps) => {
          let todaysDate = new Date().toISOString().split("T")[0];

          if (item.date && item.date > todaysDate)
            return (
              <CardContainer>
                <Card key={item.id}>
                  <CardFirstHeader>Next Bank Holiday </CardFirstHeader>
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
