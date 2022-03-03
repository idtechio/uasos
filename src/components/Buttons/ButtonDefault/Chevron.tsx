import React from "react";
import ChevronIcon from "../../../style/svgs/chevron-down.svg";

const Chevron = ({ upsideDown }) => {
  return (
    <ChevronIcon
      style={{
        height: 17,
        width: 19,
        transform:
          upsideDown && "rotate(180deg) translateX(-5px) translateY(-5px)",
      }}
    />
  );
};

export default Chevron;
