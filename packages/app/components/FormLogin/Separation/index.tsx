import React from "react";
import styled, { css } from "styled-components/native";
import { useTranslation } from "app/common-i18n/use-translation";
import { Theme } from "app/provider/theme/theme.config";

const Separation = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Detail />
      <StyledText>{t("loginForm.or")}</StyledText>
    </Wrapper>
  );
};

export default Separation;

const Wrapper = styled.View<{ theme: Theme }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 50px;
      `,
      native: css`
        height: ${theme.scale(50)}px;
      `,
    })}
`;

const Detail = styled.View`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  border: 1px solid #f5f4f4;
  z-index: -1;
`;

const StyledText = styled.Text<{ theme: Theme }>`
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  background-color: #fff;
  display: block;
  text-transform: capitalize;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 0 15px;
      `,
      native: css`
        paddng-vertical: 0;
        paddng-horizontal: ${theme.scale(15)}px;
      `,
    })}
`;
