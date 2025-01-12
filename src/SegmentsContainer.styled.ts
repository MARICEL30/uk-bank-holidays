import styled from "styled-components";

export const SegmentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 200px 10px auto;
  max-width: 500px;
  height: 40px;
  border-radius: 25px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
`;

export const Button = styled.section`
  min-height: 20px;
  color: #fff;
`;

export const Label = styled.p`
  cursor: pointer;
  padding: 0.5rem;
`;
