import styled from "styled-components/native";

export const Button = styled.Pressable`
	background-color: ${({ theme, colorOpposite }) =>
    colorOpposite ? theme.colors.textOnCta : theme.colors.cta};
	border-radius: 50px;
	padding: 16px 25px,
	text-align: center;
	display: inline-block;
	justify-content: center;
	align-items: center;
	&:hover {
		opacity: 0.7
	}
`;

export const Text = styled.Text`
  font-weight: 700;
  text-align: center;
  color: ${({ theme, colorOpposite }) =>
    colorOpposite ? theme.colors.cta : theme.colors.textOnCta};
  width: 100%;
  justify-content: center;
  display: flex;
`;
