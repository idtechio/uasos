import Link from "next/link";
import { StyleProp, ViewStyle } from "react-native";
import styled from "styled-components/native";
import { hexToRGB } from "../../helpers/misc";
import { Theme } from "../../style/theme.config";

const ToastWrapper = styled.View<{ color: string }>`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  border-radius: 5px;
  background-color: ${(props) => `${hexToRGB(props.color, 0.1)}`};
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => `${props.color}`};
  padding: 10px 15px 10px 10px;
`;

const TextAndIconWrapper = styled.View`
  flex-direction: row;
  justify-content: start;
`;

const Label = styled.Text<{ color: string }>`
  padding-left: 10px;
  color: ${(props) => `${props.color}`};
  display: flex;
  align-items: center;
`;

const LinkText = styled.Text`
  color: ${({ theme }: { theme: Theme }) => `${theme.colors.blue}`};
  font-weight: 700;
  text-decoration: underline;
`;

type ToastProps = {
  color: string;
  icon?: any;
  label: string;
  cta?: { label: string; href: string };
  contaierStyle?: StyleProp<ViewStyle>;
};

const Toast = ({
  color,
  label,
  icon,
  cta,
  contaierStyle: wrapperStyle,
}: ToastProps) => {
  return (
    <ToastWrapper color={color} style={wrapperStyle}>
      <TextAndIconWrapper>
        {icon}
        <Label color={color}>{label}</Label>
      </TextAndIconWrapper>
      {cta ? (
        <Link href={cta.href} passHref>
          <LinkText>{cta.label}</LinkText>
        </Link>
      ) : (
        <></>
      )}
    </ToastWrapper>
  );
};

export default Toast;
