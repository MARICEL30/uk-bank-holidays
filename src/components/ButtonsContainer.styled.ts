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
  background-color: #fff;
  width: fit-content;
  color: #000;
  font-size: 1rem;
  border: none;
  width: 10rem;
  cursor: pointer;
  transition: all 0.5s ease-out;
  &:active {
   filter: contrast(180%);
   transform: scale(0.9);
   filter: drop-shadow(10px 15px 20px #fc466b);
   width: 10rem;
    );
   &:hover {
     background-color: #f5ecec;
    }
    border-radius: 20px;
    @media (max-width: 600px) {
      margin: 30px auto;
    }
  }
`;
