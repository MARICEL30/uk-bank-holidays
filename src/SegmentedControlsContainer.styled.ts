import styled from "styled-components";

export const SegmentedControlsContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 280px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
  // width: 350px;
  height: 40px;
  border-radius: 40px;
  font-size: 0.9rem;
`;

export const Segments = styled.div`
  boder-radius: 25px;
  color: "#000";
`;
