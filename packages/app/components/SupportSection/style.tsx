import styled, { css } from "styled-components/native";
import Card from "../Card";
import { Theme } from "../../provider/theme/theme.config";

export const SupportCard = styled(Card)<{ theme: Theme }>`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin: 12px 0px 0px;
      `,
      native: css`
        margin-top: ${theme.scale(12)}px;
        margin-horizontal: ${theme.scale(0)}px;
        margin-bottom: ${theme.scale(0)}px;
      `,
    })}
`;

export const SupportWrapper = styled.View<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 0px 10px;
      `,
      native: css`
        padding-vertical: ${theme.scale(0)}px;
        padding-horizontal: ${theme.scale(12)}px;
      `,
    })}
`;

export const Title = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
`;

export const Placeholder = styled.View<{ theme: Theme }>`
  border-radius: 4px;
  background: #ececec;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 80px;
        height: 80px;
      `,
      native: css`
        width: ${theme.scale(80)}px;
        width: ${theme.scale(80)}px;
      `,
    })}
`;

export const HeaderWrapper = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;
  position: relative;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-bottom: 15px;
      `,
      native: css`
        margin-bottom: ${theme.scale(15)}px;
      `,
    })}
`;

export const MoreButtonWrapper = styled.View`
  position: absolute;
  top: 0px;
  right: 0px;
  z-index: 9999999;
`;

export const ImageWrapper = styled.View<{ theme: Theme }>`
  flex: 0 0 80px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        height: 80px;
      `,
      native: css`
        height: ${theme.scale(80)}px;
      `,
    })}
`;

export const TextWrapper = styled.View<{ theme: Theme }>`
  flex: 1 1 100%;
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-left: 12.7px;
      `,
      native: css`
        padding-left: ${theme.scale(12.7)}px;
      `,
    })}
`;

export const OfferTitle = styled.Text<{ theme: Theme }>`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;

  letter-spacing: 0.5px;

  color: #003566;

  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-bottom: 8px;
      `,
      native: css`
        padding-bottom: ${theme.scale(8)}px;
      `,
    })}
`;

export const Label = styled.Text`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding-right: 5px;
      `,
      native: css`
        padding-right: ${theme.scale(5)}px;
      `,
    })}
`;

export const StatusBadgeWrapper = styled.View<{ theme: Theme }>`
  align-left: flex-start;
  justify-content: flex-end;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 14px;
      `,
      native: css`
        margin-top: ${theme.scale(14)}px;
      `,
    })}
`;
