import { Touchable, View, Text } from "./style";
import { ItemProps } from "./types";

const Autocomplete = ({ disabled, value, label, onPress }: ItemProps) => {
  const onItemPress = () => onPress?.(value);

  return (
    <View>
      <Touchable disabled={disabled} onPress={onItemPress}>
        <Text>{label}</Text>
      </Touchable>
    </View>
  );
};

export default Autocomplete;
