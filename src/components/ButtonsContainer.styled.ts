import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 24rem;
  margin: 300px auto;
  border-radius: 25px;
  z-index: 10;

  @media (max-width: 600px) {
    display: block;
    width: 100vw;
    text-align: center;
    border: 1px solid red;
    height: 200px;
  }
`;

export const ButtonGroup = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  margin: 0.5rem;
  @media (max-width: 600px) {
    border: 1px solid red;
  }
`;

export const Button = styled.button`
  font-family: "Fira Sans", serif;
  background-color: #fff;
  width: fit-content;
  color: #000;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:active {
    background: #3f5efb;
    background: radial-gradient(
      circle,
      rgba(63, 94, 251, 1) 0%,
      rgba(252, 70, 107, 1) 100%
    );
    width: 11rem;
    border-radius: 20px;
    @media (max-width: 600px) {
      margin: 30px auto;
    }
  }
`;
