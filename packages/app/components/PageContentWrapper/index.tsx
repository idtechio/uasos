import React from "react";
import { ViewStyle } from "react-native";
import { InnerWrapper, OuterWrapper } from "./style";

interface PageContentWrapperProps {
  children: JSX.Element | JSX.Element[] | null;
  outerStyles?: ViewStyle;
  innerStyles?: ViewStyle;
}

const PageContentWrapper = ({
  children,
  outerStyles,
  innerStyles,
}: PageContentWrapperProps) => (
  <OuterWrapper style={outerStyles}>
    <InnerWrapper style={innerStyles}>{children}</InnerWrapper>
  </OuterWrapper>
);

export default PageContentWrapper;
