import React, { ComponentProps } from "react";
import { StyleSheet } from "react-native";
import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";
import { primary } from "app/provider/theme/theme.config";
import CrossIcon from "../../style/svgs/cross.svg";

export const FormWrapper = styled.View(
  ({ theme }: { theme: Theme }) => css`
    background-color: white;
    border: 1px solid #ececec;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    flex: 1;

    ${theme.styleFor({
      web: css`
        max-width: 360px;
        width: 94vw;
        border-radius: 10px;
        padding: 23px 18px;
        box-sizing: border-box;

        ${theme.getBreakPoint({
          sm: css`
            width: 360px;
            min-width: initial;
            max-width: initial;
          `,
        })}
      `,
      native: css`
        border-radius: ${theme.scale(10)}px;
        padding: ${theme.scale(23)}px ${theme.scale(18)}px;
      `,
    })}
  `
);

export const FormHeader = styled.Text`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme as Theme).colors.text};
`;

export const FormDescription = styled.Text`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme as Theme).colors.text};
`;

export const FormFooter = styled.View(
  ({ theme }: { theme: Theme }) => css`
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    ${theme.styleFor({
      web: css`
        margin-top: 80px;
      `,
      native: css`
        margin-top: ${theme.scale(80)}px;
      `,
    })}
  `
);

export const CloseButtonWrapper = styled.Pressable(
  ({ theme }: { theme: Theme }) => css`
    display: flex;
    position: absolute;

    ${theme.styleFor({
      web: css`
        top: 6px;
        right: 6px;
        padding: 2px;
      `,
      native: css`
        top: ${theme.scale(6)}px;
        right: ${theme.scale(6)}px;
        padding: ${theme.scale(2)}px;
      `,
    })}
  `
);

export const CloseButton = (
  props: ComponentProps<typeof CloseButtonWrapper>
) => (
  <CloseButtonWrapper {...props}>
    <CrossIcon />
  </CloseButtonWrapper>
);

export const ButtonsBox = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InnerHTML = styled.View(
  ({ theme }: { theme: Theme }) =>
    css`
      ${theme.styleFor({
        web: css`
          margin: 1em 0;
          margin-top: 40px;
        `,
        native: css`
          margin-top: ${theme.scale(40)}px;
        `,
      })}
    `
);

export const styles = StyleSheet.create({
  html: {
    color: primary.colors.text,
    fontSize: 16,
    fontFamily: "RobotoRegular",
  },
});
