import { WomanIcon } from "./WomanIcon";
import React from "react";
import { Container, Icon, P } from "../Header.styled";

export const Header = () => {
  return (
    <Container>
      <Icon>
        <WomanIcon />
      </Icon>
      <P> UK Bank Holidays</P>
    </Container>
  );
};
