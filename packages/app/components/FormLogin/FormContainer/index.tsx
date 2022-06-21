import React from "react";
import styled, { css } from "styled-components/native";
import { Theme } from "app/provider/theme/theme.config";

type Props = {
  children: React.ReactNode;
};

const FormContainer = ({ children }: Props) => {
  return <FormContainerWrapper>{children}</FormContainerWrapper>;
};

export default FormContainer;

const FormContainerWrapper = styled.View<{ theme: Theme }>`
  display: flex;
  width: 100%;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        max-width: 400px;
        margin: 0 auto;
      `,
      native: css`
        max-width: ${theme.scale(400)}px;
        margin-vertical: 0;
        align-self: center;
      `,
    })}
`;
