import styled from "styled-components";

export const Container = styled.section`
  display: inline-block;
  width: 11rem;
  margin: 250px 0 90px 0;
  border-radius: 25px;
  z-index: 10;
`;

export const ButtonGroup = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background: #fff;
`;

export const Button = styled.button`
  font-family: "Fira Sans", serif;
  background: transparent;
  color: #000;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  &:active {
    background: #2980b9; // Color when clicked
  }
`;
