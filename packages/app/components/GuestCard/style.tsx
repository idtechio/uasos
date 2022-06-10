import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

export const Container = styled.View<{ theme: Theme }>`
  width: "100%";
  background-color: #fff;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 20px;
      `,
      native: css`
        margin-bottom: ${theme.scale(20)}px;
      `,
    })}
`;

export const Header = styled.View<{ theme: Theme }>`
  flex-direction: row;
  justify-content: space-between;
  border-top-width: 1;
  border-top-color: #f5f4f4;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 16px 22px;
      `,
      native: css`
        padding: ${theme.scale(16)}px ${theme.scale(22)}px;
      `,
    })}
`;

export const HeaderLeft = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const HeaderRight = styled.View`
  align-items: flex-end;
`;

export const HeaderRightText = styled.View<{ theme: Theme }>`
  flex-direction: row;
  align-items: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 6px;
      `,
      native: css`
        margin-bottom: ${theme.scale(6)}px;
      `,
    })}
`;

export const HeaderRightTextContent = styled.Text<{
  small?: boolean;
  theme: Theme;
}>`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ small }) => (small ? "10px" : "14px")};
  font-weight: ${({ small }) => (small ? 500 : 700)};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 8px;
      `,
      native: css`
        margin-left: ${theme.scale(8)}px;
      `,
    })}
`;

export const Tags = styled.View<{ theme: Theme }>`
  flex-direction: column;
  border-top-width: 1px;
  border-top-color: #f5f4f4;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 22px 22px 22px 60px;
      `,
      native: css`
        padding: ${theme.scale(22)}px ${theme.scale(22)}px ${theme.scale(22)}px
          ${theme.scale(60)}px;
      `,
    })}
`;

export const Tag = styled.View<{ disable?: boolean; theme: Theme }>`
  flex-direction: row;
  align-items: center;
  border-radius: 5px;
  border-width: 1px;
  border-color: #f5f4f4;
  width: auto;
  opacity: ${({ disable }) => (disable ? 0.2 : 1)};

  ${({ theme }) =>
    theme.scale({
      web: css`
        padding: 10px;
        margin: 0px 10px 10px 0px;
      `,
      native: css`
        padding: ${theme.scale(10)}px;
        margin: 0px ${theme.scale(10)}px ${theme.scale(10)}px 0px;
      `,
    })}
`;

export const TagText = styled.Text<{ theme: Theme }>`
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 8px;
      `,
      native: css`
        margin-left: ${theme.scale(8)}px;
      `,
    })}
`;

export const Footer = styled.View<{ theme: Theme }>`
  flex-direction: row;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: #f5f4f4;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 16px 22px;
      `,
      native: css`
        padding: ${theme.scale(16)}px ${theme.scale(22)}px;
      `,
    })}
`;
