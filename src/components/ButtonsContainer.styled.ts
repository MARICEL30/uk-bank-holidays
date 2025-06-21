import styled from "styled-components";

export const Container = styled.section`
  border-radius: 25px;
  z-index: 10;
`;

export const ButtonGroup = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);

  display: flex;
  gap: 8px; /* Optional spacing between buttons */

  border-radius: 20px;
  background: #fff;
`;

export const Button = styled.button`
  border: none;
  font-family: "Fira Sans", serif;
  background: transparent;
  color: #000;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
`;
