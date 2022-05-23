import styled from "styled-components/native";
import { devices } from "../../../../project.config";

export const Grid = styled.View<{
  spacing: [number, number];
  childrenCount: number;
  mobileReverse: boolean;
  alignItems: string;
  disableRwd: boolean | undefined;
}>`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + ${(props) => (props.spacing ? props.spacing[0] : 0)}px);
  margin-left: -${(props) => (props.spacing ? props.spacing[0] / 2 : 0)}px;
  margin-right: -${(props) => (props.spacing ? props.spacing[0] / 2 : 0)}px;
  margin-bottom: -${(props) => (props.spacing ? props.spacing[1] : 0)}px;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  ${(props) =>
    !props.disableRwd
      ? `@media ${devices.tabletWide} {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
			margin-bottom: 0;
			${() => (props.mobileReverse ? "flex-direction: column-reverse;" : "")}
		}`
      : null}
  & > div {
    width: calc(
      ${(props) => 100 / props.childrenCount}% -
        ${(props) => (props.spacing ? props.spacing[0] : 0)}px
    );
    margin-left: ${(props) => (props.spacing ? props.spacing[0] / 2 : 0)}px;
    margin-right: ${(props) => (props.spacing ? props.spacing[0] / 2 : 0)}px;
    margin-bottom: ${(props) => (props.spacing ? props.spacing[1] : 0)}px;
    ${(props) =>
      !props.disableRwd
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
`;
