import styled from "styled-components/native";
import { css } from "styled-components";

type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return <FormContainerWrapper>{children}</FormContainerWrapper>;
};

export default FormContainer;

const FormContainerWrapper = styled.View`
  display: flex;
  ${({ theme }) =>
    theme.getBreakPoint({
      sm: css`
        width: 400px;
        margin: 0 auto;
      `,
    })}
`;
