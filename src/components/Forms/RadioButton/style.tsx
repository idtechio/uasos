import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

interface RadioButtonStyleInterface {
  radius?: number;
  borderWidth?: number;
  color?: string;
}

interface RadioButtonLabelStyleInterface {
  theme: Theme;
  fontSize?: number;
}

export const RadioButtonContainer = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-top: 0;
  padding-bottom: 10;
`;

export const RadioButtonLabel = styled.Text<RadioButtonLabelStyleInterface>`
  color: ${({ theme }: { theme: Theme }) => theme.colors.headings};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 14)};
  margin-left: 10;
`;

export const RadioButtonOuterCircle = styled.View<RadioButtonStyleInterface>`
  height: ${(props) => (props.radius ? props.radius * 2 : 18)};
  width: ${(props) => (props.radius ? props.radius * 2 : 18)};
  border-radius: ${(props) => (props.radius ? props.radius : 9)};
  border-width: ${(props) => (props.borderWidth ? props.borderWidth : 1)};
  border-color: ${(props) => (props.color ? props.color : "#bbbbbc")};
  align-items: center;
  justify-content: center;
`;

export const RadioButtonInnerCircle = styled.View<RadioButtonStyleInterface>`
  height: ${(props) => (props.radius ? props.radius * 1.25 : 11)};
  width: ${(props) => (props.radius ? props.radius * 1.25 : 11)};
  border-radius: ${(props) => (props.radius ? props.radius : 9)};
  background-color: ${(props) => (props.color ? props.color : "#bbbbbc")};
`;
