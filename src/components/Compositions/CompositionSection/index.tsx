import type { SectionProps } from "./types";
import { PageSection, SectionHeader } from "./style";

const CompositionSection = ({
  children,
  backgroundColor,
  zeroPadding,
  sectionId,
  padding,
  header,
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
      {header ? <SectionHeader>{header}</SectionHeader> : null}
      {children}
    </PageSection>
  );
};

export default CompositionSection;
