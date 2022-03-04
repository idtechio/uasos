import React from "react";

import { Touchable, View, Text } from "./style";
import { ItemProps } from "./types";

const Autocomplete = ({ disabled, value, label, onPress }: ItemProps) => {
  return (
    <View>
      <Touchable disabled={disabled} onPress={() => onPress && onPress(value)}>
        <Text>{label}</Text>
      </Touchable>
    </View>
  );
};

export default Autocomplete;
