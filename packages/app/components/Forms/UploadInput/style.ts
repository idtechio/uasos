import styled, { css } from "styled-components/native";
import { Theme } from "../../../provider/theme/theme.config";

export const UploadButton = styled.TouchableOpacity<{ theme: Theme }>`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border: 1.5px #c8c8c8 dashed;
  border-radius: 10px;
  flex-direction: column;
  background: #fff;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        width: 85px;
        height: 85px;
      `,
      native: css`
        width: ${theme.scale(85)}px;
        height: ${theme.scale(85)}px;
      `,
    })}
`;

export const ButtonLabelText = styled.Text<{ theme: Theme }>`
  color: #003566;
  font-weight: 700;
  font-size: 14px;
  line-height: 16.5px;
  text-align: center;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-top: 10px;
      `,
      native: css`
        margin-top: ${theme.scale(10)}px;
      `,
    })}
`;

export const List = styled.View<{ theme: Theme }>`
  display: flex;
  flex-direction: row;

  ${({ theme }) =>
    theme.styleFor({
      web: css`
        gap: 0px 15px;
      `,
      native: css`
        gap: 0px ${theme.scale(15)}px;
      `,
    })}
`;
