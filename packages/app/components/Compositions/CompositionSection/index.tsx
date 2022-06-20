import React from "react";
import type { SectionProps } from "./types";
import {
  PageSection,
  HeaderWrapper,
  SectionHeader,
  SectionSubHeader,
} from "./style";

const CompositionSection = ({
  children,
  backgroundColor,
  sectionId,
  header,
  paddingT,
  paddingR,
  paddingB,
  paddingL,
  subHeader,
  zIndex,
  flexGrow,
}: SectionProps) => {
  return (
    <PageSection
      id={sectionId}
      backgroundColor={backgroundColor}
      paddingT={paddingT}
      paddingR={paddingR}
      paddingB={paddingB}
      paddingL={paddingL}
      zIndex={zIndex}
      flexGrow={flexGrow}
    >
    <>
      <HeaderWrapper useMargin={Boolean(header || subHeader)}>
        {header && <SectionHeader>{header}</SectionHeader>}
        {subHeader && <SectionSubHeader>{subHeader}</SectionSubHeader>}
      </HeaderWrapper>
      {children}
      </>      
    </PageSection>
  );
};

export default CompositionSection;
