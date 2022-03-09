import styled from "styled-components/native";
import { Theme } from "../../../style/theme.config";

export const Label = styled.Text<{ error?: boolean; theme: Theme }>`
  color: ${(props) => (props.error ? props.theme.colors.error : `inherit`)};
`;
