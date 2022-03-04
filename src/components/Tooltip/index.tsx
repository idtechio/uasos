import React from "react";
import styled from "styled-components/native";

type Props = {
  visible: boolean;
  children: React.ReactNode;
};

export const TooltipContainer = styled.View`
  position: absolute;
  bottom: 15;
  left: 15;
  zindex: 20;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  max-width: 200px;
  min-width: 200px;
  border-color: rgba(0, 0, 0, 0.05);
  border-width: 1px;
`;

export const Tooltip = ({ visible, children }: Props) => {
  if (!visible) {
    return null;
  }
  return <TooltipContainer>{children}</TooltipContainer>;
};
