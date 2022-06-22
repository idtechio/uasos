import styled, { css } from "styled-components/native";
import { TextStyle, ViewStyle } from "react-native";
import { Theme } from "app/provider/theme/theme.config";

export const DropDownWrapperObject: ViewStyle = {
  borderWidth: 1,
  borderColor: "#dedede",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: 0,
  paddingTop: 0,
  paddingBottom: 0,
  ...({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        width: 190px;
        padding-right: 12;
      `,
      native: css`
        width: ${theme.scale(190)}px;
        padding-right: ${theme.scale(12)}px;
      `,
    })(),
};

export const DropDownWrapperMobileObject: ViewStyle = {
  ...DropDownWrapperObject,
  ...({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        width: 90px;
      `,
      native: css`
        width: ${theme.scale(90)}px;
      `,
    })(),
};

export const DropDownListObject = {
  borderRadius: "3px",
  background: "#ffffff",

  ...({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        width: 200px;
        box-shadow: "0px 1px 5px rgba(0, 0, 0, 0.14)";
      `,
      native: css`
        width: ${theme.scale(200)}px;
        shadow-color: #000;
        shadow-offset: {
          width: 0,
          height: 1,
        };
        shadow-opacity: 0.14;
        shadow-radius: 0;
        elevation: 5;
      `,
    })(),
};

export const DropDownListItemObject: ViewStyle = {
  height: "100%",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "row",
  alignItems: "center",
  padding: 0,
};

export const Flex = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LanguageLabel = styled.Text`
  font-family: Roboto;
  font-weight: 700;
  color: #003566;
  font-size: 16px;
  line-height: 24px;

  ${({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 10px;
      `,
      native: css`
        margin-left: ${theme.scale(10)}px;
      `,
    })}
`;

export const InnerLink: ViewStyle = {
  display: "flex",
  alignItems: "center",
  width: "100%",

  ...({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        min-width: 32px;
        padding: 10px;
      `,
      native: css`
        min-width: ${theme.scale(32)}px;
        padding: ${theme.scale(10)}px;
      `,
    })(),
};

export const InnerLinkWeb = {
  display: "flex",
  alignItems: "center",
  width: "100%",

  ...({ theme }: { theme: Theme }) =>
    theme.styleFor({
      web: css`
        min-width: 32px;
        padding: 10px;
      `,
      native: css`
        min-width: ${theme.scale(32)}px;
        padding: ${theme.scale(10)}px;
      `,
    })(),
};

export const DropDownListItemObjectSelected: ViewStyle = {
  backgroundColor: "rgba(0, 61, 128, 0.05)",
};

export const ItemTextStyle: TextStyle = {
  width: "100%",
};
