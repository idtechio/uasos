import React from "react";

import { Touchable, View, Text } from "./style";
import { ItemProps } from "./types";

const Autocomplete = ({ disabled, value, label, onPress }: ItemProps) => {
  const onItemPress = () => onPress && onPress(value);

  return (
    <View>
      <Touchable disabled={disabled} onPress={onItemPress}>
        <Text>{label}</Text>
      </Touchable>
    </View>
  );
};

export default Autocomplete;
