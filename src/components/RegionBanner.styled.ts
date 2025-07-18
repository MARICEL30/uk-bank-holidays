import styled from "styled-components";

export const RegionBannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 20px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const RegionTitle = styled.h1`
  font-family: "Montserrat", serif;
  font-weight: 500;
  font-size: 1.2rem;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;
