import React from "react";
import { StyleProp, ViewStyle } from "react-native";

export type CardModalProps = {
  children: React.ReactNode;
  onModalClose?: () => void;
  cardStyle?: StyleProp<ViewStyle>;
  closeable?: boolean;
};
