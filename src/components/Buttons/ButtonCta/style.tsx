import styled from "styled-components/native";

export const Button = styled.View`
	background-color: ${(props) => props.theme.colors.cta};
	border-radius: 50px;
	padding: 12px 25px,
	width: fit-content;
`;

export const ButtonAnchor = styled.Text`
  color: ${(props) => props.theme.colors.textOnCta};
`;
