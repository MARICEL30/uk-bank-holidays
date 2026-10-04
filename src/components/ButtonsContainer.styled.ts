import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 44rem;
  margin: 280px auto 0 auto;
  border-radius: 25px;
  z-index: 10;

  @media (max-width: 600px) {
    display: block;
    width: 50vw;
    text-align: center;
  }
`;

export const ButtonGroup = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: #fff;
  text-align: center;
  margin: 0.5rem;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const Button = styled.button`
  font-family: "Fira Sans", serif;
  background-color: #eb69f5;
  width: fit-content;
  color: #fff;
  font-size: 1rem;
  border: none;
  width: 10rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.5s ease-out;

  &:active {
    filter: drop-shadow(10px 15px 20px #fc466b);
    transform: scale(0.9);
  }

  &:hover {
    filter: brightness(0.92);
  }

  @media (max-width: 600px) {
    margin: 30px auto;
  }
`;
