import React from "react";
import {
  CardContainer,
  CardFirstHeader,
  CardSecondHeader,
  CardThirdHeader,
} from "../assets/Card.styled";

export const Card = (props: any) => {
  return (
    <CardContainer>
      <Card>
        <CardFirstHeader />
        <CardSecondHeader />
        <CardThirdHeader />
      </Card>
    </CardContainer>
  );
};
