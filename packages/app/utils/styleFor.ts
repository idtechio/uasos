import { css } from "styled-components/native";
import { Platform } from "react-native";

export const styleFor = ({ native, web }: { native?: any; web?: any } = {}) => {
  if (native && web) {
    return Platform.select({
      web,
      native,
    });
  }

  if (native) {
    return Platform.select({
      native,
    });
  }

  if (web) {
    return Platform.select({
      web,
    });
  }
  return css``;
};
