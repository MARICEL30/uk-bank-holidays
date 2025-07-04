import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  &:first-child {
    margin-top: 20px;
  }
`;

export const Card = styled.div`
  width: 370px;
  height: 160px;
  border: 1px solid #d3d3d3;
  background-color: #fff;
  border-radius: 15px;
  margin: 10px auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

export const CardFirstHeader = styled.p`
  font-family: "Fira Sans", serif;
  border: 1px solid #d3d3d3;
  width: fit-content;
  font-size: 0.8rem;
  padding: 0.2rem;
  margin-left: 10px;
  background-color: #eb69f5;
  color: #fff;
`;

export const CardSecondHeader = styled.h2`
  font-family: "Montserrat", serif;
  font-weight: 500;
  font-size: 1.1rem;
`;

export const CardThirdHeader = styled.h3`
  font-family: "Montserrat", serif;
  font-weight: 400;
  font-size: 1.2rem;
  font-style: normal;
`;
