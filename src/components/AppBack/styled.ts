import styled from "styled-components/native";
import { Theme } from "../../style/theme.config";

export const LinkContent = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;

export const StyledText = styled.Text`
  text-transform: capitalize;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  width: 100%;
  margin-left: 10px;
`;

export const Wrapper = styled.View`
  margin-top: 18px;
  margin-bottom: 15px;
  background-color: ${({ theme }: { theme: Theme }) =>
    theme.pageSection.backgroundColorAlt};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding-left: 6px;
  z-index: 10;
`;

export const ChevronIconWrapper = styled.View`
  transform: rotate(90deg) translateX(-1px);
  width: 24,
  height: 24,
`;
