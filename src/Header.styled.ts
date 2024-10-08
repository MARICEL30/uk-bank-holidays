import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px auto;
`;

export const Icon = styled.div`
  border-radius: 50%;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  width: 350px;
  height: 350px;
  margin: 0 auto;
  z-index: -1;
`;

export const P = styled.h1`
  font-size: 1.5rem;
  margin-top: 20px;
  color: #000000;
`;