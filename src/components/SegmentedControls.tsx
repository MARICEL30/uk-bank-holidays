import React from "react";

type Props = {
  width: string;
  height: string;
};

export const SegmentedControls = ({ width, height }: Props) => {
  return (
    <div>
      <button>England & Wales</button>
      <button>All </button>
    </div>
  );
};
