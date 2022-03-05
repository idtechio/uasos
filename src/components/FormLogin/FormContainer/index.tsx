import React, { FC } from "react";
import styled from "styled-components/native";
import { css } from "styled-components";

const FormContainer: FC = ({ children }) => {
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
