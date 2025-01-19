import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled.div`
  width: 350px;
  height: 155px;
  background: #f0e2f1;
  border-radius: 20px;
  margin: 20px auto;
`;

export const CardFirstHeader = styled.h1`
  font-family: "Fira Sans", serif;
  font-size: 1.4rem;
  font-weight: 600;
  font-style: normal;
`;

export const CardSecondHeader = styled.h2`
  font-family: "Fira Sans", serif;
  font-weight: 500;
  font-size: 1.2rem;
  font-style: normal;
`;

export const CardThirdHeader = styled.h3`
  font-family: "Fira Sans", serif;
  font-weight: 400;
  font-size: 1.2rem;
  font-style: normal;
`;
