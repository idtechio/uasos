import type { SectionProps } from "./types";
import { PageSection } from "./style";

const CompositionSection = ({
  children,
  backgroundColor,
  zeroPadding,
  sectionId,
  padding,
  header,
  zIndex,
}: SectionProps) => {
  return (
    <PageSection
      id={sectionId}
      backgroundColor={backgroundColor}
      zeroPadding={zeroPadding}
      padding={padding}
      zIndex={zIndex}
    >
      {children}
    </PageSection>
  );
};

export default CompositionSection;
