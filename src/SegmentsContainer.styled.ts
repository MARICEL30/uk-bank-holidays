import styled from "styled-components";

export const SegmentsContainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  background: white;
  margin-top: 200px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  max-width: 500px;
  padding: 10px;
  overflow: hidden;
  position: relative;
  // &:before {
  //   content: "";
  //   background: #5465ff;
  //   border-radius: 8px;
  //   width: auto;
  //   transform: translateX(0));
  //   position: absolute;
  //   top: 8px;
  //   bottom: 8px;
  //   left: 0;
  //   z-index: 0;
  // }
`;

export const RadioGroup = styled.section`
  min-width: 120px;
  position: relative;
  text-align: center;
  z-index: 1;
  font-family: "Fira Sans", serif;
  color: #000;
`;

export const Input = styled.input`
  opacity: 0;
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
  cursor: pointer;
  height: 100%;
`;

export const Label = styled.label`
  cursor: pointer;
  display: block;
  padding: 2px;
  position: relative;
  transition: color 0.5s ease;
  &:hover {
    color: green;
  }
`;
