import React, { useState } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import InfoIcon from "../../style/svgs/info.svg";

type Props = {
  children: React.ReactNode;
};

export const TooltipContainer = styled.View`
  position: absolute;
  bottom: 15;
  left: 15;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  max-width: 200px;
  min-width: 200px;
  border-color: rgba(0, 0, 0, 0.05);
  border-width: 1px;
  z-index: 100 !important;
`;

export const Tooltip = ({ children }: Props) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);

  return (
    <>
      <View
        // @ts-ignore
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <InfoIcon />
      </View>
      {tooltipVisible && <TooltipContainer>{children}</TooltipContainer>}
    </>
  );
};
