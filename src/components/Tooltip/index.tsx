import { useEffect, useRef, useState } from "react";
import { Platform, useWindowDimensions, View } from "react-native";
import styled from "styled-components/native";
import InfoIcon from "../../style/svgs/info.svg";

type Props = {
  children: React.ReactNode;
};

export const TooltipContainer = styled.View`
  position: absolute;
  bottom: -15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  min-width: 200px;
  max-width: 200px;
  border-color: rgba(0, 0, 0, 0.05);
  border-width: 1px;
  z-index: 100 !important;
`;

export const Tooltip = ({ children }: Props) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const containerRef = useRef<HTMLElement>();
  const [leftOffset, setLeftOffset] = useState(15);

  const { width } = useWindowDimensions();

  useEffect(() => {
    if (tooltipVisible && Platform.OS === "web" && containerRef.current) {
      const boundingBox = containerRef.current.getBoundingClientRect();

      const rightEdge = boundingBox.x + boundingBox.width;

      if (rightEdge > width) {
        const diff = rightEdge - width;
        setLeftOffset(-diff);
      }
    }
  }, [tooltipVisible, width]);

  return (
    <>
      <View
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <InfoIcon />
        {tooltipVisible && (
          // @ts-expect-error TODO: fix ref type
          <TooltipContainer style={{ left: leftOffset }} ref={containerRef}>
            {children}
          </TooltipContainer>
        )}
      </View>
    </>
  );
};
