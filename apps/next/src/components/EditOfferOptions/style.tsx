import React, { ComponentProps } from "react";
import styled, { css } from "styled-components/native";
import CrossIcon from "../../style/svgs/cross.svg";
import { Theme } from "../../style/theme.config";

export const FormWrapper = styled.View`
  background-color: white;
  padding: 23px 18px;
  border: 1px solid #ececec;
  box-sizing: border-box;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.13);
  border-radius: 10px;
  max-width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  max-width: 360px;
  width: 94vw;

  ${({ theme }: { theme: Theme }) =>
    theme.getBreakPoint({
      sm: css`
        width: 360px;
        min-width: initial;
        max-width: initial;
      `,
    })}
`;

export const FormHeader = styled.Text`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme as Theme).colors.text};
`;

export const FormDescription = styled.Text`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-width: 36ch;

  letter-spacing: 0.5px;
  color: ${({ theme }) => (theme as Theme).colors.text};
`;

export const FormFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 80px;
  width: 100%;
`;

export const CloseButtonWrapper = styled.Pressable`
  display: flex;
  position: absolute;
  top: 6px;
  right: 6px;
  padding: 2px;
`;

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

export const InnerHTML = styled.View`
  margin: 1em 0;
  margin-top: 40px;
`;

export const InnerHTMLText = styled.Text`
  font-size: 16px;
`;
