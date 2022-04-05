import styled from "styled-components/native";
import Card from "../Card";
import PlusCircleIcon from "../../../src/style/svgs/plus_circle.svg";
import { Theme } from "../../style/theme.config";

const CardAddWrapper = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }: { theme: Theme }) => theme.colors.lightgray};
  border: 1px dashed ${({ theme }: { theme: Theme }) => theme.colors.darkgray};
  box-sizing: border-box;
  border-radius: 8px;
  padding: 40px 0px;
  margin-top: 14px;
`;

const Button = styled.Pressable`
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: ${({ theme }: { theme: Theme }) => theme.colors.blue};
  font-size: 14px;
  font-weight: 700;
  padding: 10px 0px;
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
