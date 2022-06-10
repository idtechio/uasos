import styled, { css } from "styled-components/native";
import { StyleSheet, Platform, Dimensions } from "react-native";
import { Theme } from "../../../provider/theme/theme.config";
import { PHONE_INPUT_SIZES } from "./consts";
import { scale } from "../../../utils/scale";

export const LabelContent = styled.Text`
  display: flex;
  align-items: center;
`;
export const PhonePrefix = styled.Text<{ theme: Theme }>`
  ${({ theme }) =>
    theme.styleFor({
      web: css`
        margin-left: 5;
      `,
      native: css`
        margin-left: ${theme.scale(5)}px;
      `,
    })}
`;

export const styles = StyleSheet.create({
  prefixInputControl: {
    ...Platform.select({
      web: {
        width: `${PHONE_INPUT_SIZES.INPUT_WIDTH}px`,
      },
      default: {
        width: `${scale(PHONE_INPUT_SIZES.INPUT_WIDTH)}px`,
      },
    }),
  },
  phoneInputControl: {
    ...Platform.select({
      web: {
        maxWidth: "283px",
        width: `calc(100% - ${PHONE_INPUT_SIZES.INPUT_WIDTH}px - ${PHONE_INPUT_SIZES.COMPOSITION_ROW_SPACING}px)`,
        marginBottom: "12px",
      },
      default: {
        width: `${
          Dimensions.get("window").width -
          scale(PHONE_INPUT_SIZES.INPUT_WIDTH) -
          scale(PHONE_INPUT_SIZES.COMPOSITION_ROW_SPACING)
        }px`,
      },
    }),
  },
  dropdown: {
    ...Platform.select({
      web: {
        marginBottom: `${PHONE_INPUT_SIZES.INPUT_MARGIN}px`,
        paddingVertical: `${PHONE_INPUT_SIZES.INPUT_PADDING}px`,
      },
      default: {
        marginBottom: `${scale(PHONE_INPUT_SIZES.INPUT_MARGIN)}px`,
        paddingVertical: `${scale(PHONE_INPUT_SIZES.INPUT_PADDING)}px`,
      },
    }),
  },
  inputWrapper: {
    ...Platform.select({
      web: {
        height: `${PHONE_INPUT_SIZES.INPUT_HEIGHT}px`,
        marginBottom: `${PHONE_INPUT_SIZES.INPUT_MARGIN}px`,
      },
      default: {
        height: `${scale(PHONE_INPUT_SIZES.INPUT_HEIGHT)}px`,
        marginBottom: `${scale(PHONE_INPUT_SIZES.INPUT_MARGIN)}px`,
      },
    }),
  },
  inputText: {
    ...Platform.select({
      web: {
        height: `${PHONE_INPUT_SIZES.INPUT_HEIGHT}px`,
        paddingVertical: `${PHONE_INPUT_SIZES.INPUT_PADDING}px`,
      },
      default: {
        height: `${scale(PHONE_INPUT_SIZES.INPUT_HEIGHT)}px`,
        paddingVertical: `${scale(PHONE_INPUT_SIZES.INPUT_PADDING)}px`,
      },
    }),
  },
});
