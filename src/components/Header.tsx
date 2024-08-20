import { WomanIcon } from "./WomanIcon";
import React from "react";
import { Container, Icon, P } from "../Header.styled";

type headerProps = {
  title: string;
};

export const Header = ({ title }: headerProps) => {
  return (
    <Container>
      <Icon>
        <WomanIcon />
      </Icon>
      <P> {title}</P>
    </Container>
  );
};
