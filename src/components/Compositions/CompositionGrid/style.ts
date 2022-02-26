import styled from "styled-components";
import { devices } from "../../../../project.config";

export const Grid = styled.div<{
  spaceing: [number, number];
  childrenCount: number;
  mobileReverse: boolean;
  alignItems: string;
  disableRwd: boolean;
}>`
  display: flex;
  flex-wrap: wrap;
  width: calc(100% + ${(props) => (props.spaceing ? props.spaceing[0] : 0)}px);
  margin-left: -${(props) => (props.spaceing ? props.spaceing[0] / 2 : 0)}px;
  margin-right: -${(props) => (props.spaceing ? props.spaceing[0] / 2 : 0)}px;
  margin-bottom: -${(props) => (props.spaceing ? props.spaceing[1] : 0)}px;
  align-items: ${(props) => (props.alignItems ? props.alignItems : "unset")};
  ${(props) =>
    !props.disableRwd
      ? `@media ${devices.tabletWide} {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
			margin-bottom: 0;
			${(props) => (props.mobileReverse ? "flex-direction: column-reverse;" : "")}
		}`
      : null}
  & > div {
    width: calc(
      ${(props) => 100 / props.childrenCount}% -
        ${(props) => (props.spaceing ? props.spaceing[0] : 0)}px
    );
    margin-left: ${(props) => (props.spaceing ? props.spaceing[0] / 2 : 0)}px;
    margin-right: ${(props) => (props.spaceing ? props.spaceing[0] / 2 : 0)}px;
    margin-bottom: ${(props) => (props.spaceing ? props.spaceing[1] : 0)}px;
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
