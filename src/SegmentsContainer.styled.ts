import styled from "styled-components";

export const SegmentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 200px 10px auto;
  max-width: 500px;

  border-radius: 25px;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
`;

export const ButtonContainer = styled.section`
  min-height: 30px;
  margin-top: 0.5rem;
  color: #fff;
`;

export const Text = styled.text`
  cursor: pointer;
  padding: 0.5rem;
`;
