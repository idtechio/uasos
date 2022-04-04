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
  zeroPadding,
  sectionId,
  padding,
  header,
  subHeader,
  zIndex,
  flexGrow,
}: SectionProps) => {
  return (
    <PageSection
      id={sectionId}
      backgroundColor={backgroundColor}
      zeroPadding={zeroPadding}
      padding={padding}
      zIndex={zIndex}
      flexGrow={flexGrow}
    >
      <HeaderWrapper>
        {header ? <SectionHeader>{header}</SectionHeader> : null}
        {subHeader && <SectionSubHeader>{subHeader}</SectionSubHeader>}
      </HeaderWrapper>

      {children}
    </PageSection>
  );
};

export default CompositionSection;
