import React from "react";
import Card from "../../../../apps/next/src/components/Card";
import PlusCircleIcon from "../../../src/style/svgs/plus_circle.svg";
import styled, { css } from "styled-components/native";
import { Theme } from "../../provider/theme/theme.config";

const CardAddWrapper = styled(Card)<{ theme: Theme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.lightgray};
  border: 1px dashed ${({ theme }: { theme: Theme }) => theme.colors.darkgray};
  box-sizing: border-box;
  border-radius: 8px;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 40px 0px;
        margin-top: 14px;
      `,
      native: css`
        padding-vertical: ${theme.scale(40)}px;
        padding-horizontal: ${theme.scale(0)}px;
        margin-top: ${theme.scale(14)}px;
      `,
    })}
`;

const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text<{ theme: Theme }>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  font-size: 14px;
  font-weight: 700;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        padding: 10px 0px;
      `,
      native: css`
        padding-vertical: ${theme.scale(10)}px;
        padding-horizontal: ${theme.scale(0)}px;
      `,
    })}
`;

type CardAddProps = { label: string; onPress: () => void; readonly?: boolean };

export default function CardAdd({ label, onPress, readonly }: CardAddProps) {
  return (
    <CardAddWrapper>
      <Button onPress={onPress} disabled={readonly}>
        <PlusCircleIcon />
        <Label>{label}</Label>
      </Button>
    </CardAddWrapper>
  );
}
