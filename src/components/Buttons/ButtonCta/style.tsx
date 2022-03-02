import styled from "styled-components/native";

export const Button = styled.Pressable`
	background-color: ${({ theme }) => theme.colors.cta};
	border-radius: 50px;
	padding: 12px 25px,
	text-align: center;
	display: inline-block;

	&:hover {
		opacity: 0.7
	}
`;

export const Text = styled.Text`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textOnCta};
`;
