import React from "react";
import { RegionBannerContainer, RegionTitle } from "./RegionBanner.styled";

export type RegionBannerProps = {
  title: string;
};

export const RegionBanner = ({ title }: RegionBannerProps) => {
  return (
    <RegionBannerContainer>
      <RegionTitle> Upcoming holidays in {title} </RegionTitle>
    </RegionBannerContainer>
  );
};
