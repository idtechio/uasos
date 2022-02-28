import styled from "styled-components/native";

export const Button = styled.View`
	background-color: ${(props) => props.theme.colors.cta};
	border-radius: 50px;
	padding: 12px 25px,
	width: fit-content;
	cursor: pointer;
	text-align: center;
	&:hover {
		opacity: 0.7
	}
`;

export const ButtonAnchor = styled.Text`
  color: ${(props) => props.theme.colors.textOnCta};
`;
