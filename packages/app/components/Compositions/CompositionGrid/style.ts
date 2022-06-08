import { Theme } from "app/provider/theme/theme.config";
import styled, { css } from "styled-components/native";
import { devices } from "../../../project.config";

export const Grid = styled.View<{
  spacing: [number, number];
  childrenCount: number;
  mobileReverse: boolean;
  alignItems: string;
  disableRwd: boolean | undefined;
  theme: Theme;
}>(
  ({ spacing, childrenCount, mobileReverse, alignItems, disableRwd }) => css`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% + ${spacing ? spacing[0] : 0}px);
    margin-left: -${spacing ? spacing[0] / 2 : 0}px;
    margin-right: -${spacing ? spacing[0] / 2 : 0}px;
    margin-bottom: -${spacing ? spacing[1] : 0}px;
    align-items: ${alignItems ? alignItems : "unset"};
    ${!disableRwd
      ? `@media ${devices.tabletWide} {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0;
    ${mobileReverse ? "flex-direction: column-reverse;" : ""}
  }`
      : null}
    & > div {
      width: calc(${100 / childrenCount}% - ${spacing ? spacing[0] : 0}px);
      margin-left: ${spacing ? spacing[0] / 2 : 0}px;
      margin-right: ${spacing ? spacing[0] / 2 : 0}px;
      margin-bottom: ${spacing ? spacing[1] : 0}px;
      ${!disableRwd
        ? `@media ${devices.tabletWide} {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 0;
      &:first-child {
        margin-top: 0;
      }
    }`
        : null}).
    }
  `
);
