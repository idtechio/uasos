import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const StyledHeader = styled.Text`
  display: flex;
  font-size: 24px;
  line-height: 24px;
  font-weight: bold;
  letter-spacing: 0.5px;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
`;
export const StyledSubheader = styled.Text<{ theme: Theme }>`
  display: flex;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${({ theme }) => theme.colors.blue};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 10px 0 50px;
      `,
      native: css`
        margin: ${theme.scale(10)}px 0 ${theme.scale(50)}px;
      `,
    })}
`;
export const StyledErrorMessage = styled.Text`
  color: red;
  font-size: 16;
  line-height: 24;
`;

export const FormPhoneInputWrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 10px;
      `,
      native: css`
        margin-bottom: ${theme.scale(10)}px;
      `,
    })}
`;

export const FormTextInputWrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 6px;
        margin-bottom: 10px;
      `,
      native: css`
        margin-top: ${theme.scale(6)}px;
        margin-bottom: ${theme.scale(10)}px;
      `,
    })}
`;

export const SectionContent = styled.View<{ theme: Theme }>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        max-width: 400px;
      `,
    })}
`;
