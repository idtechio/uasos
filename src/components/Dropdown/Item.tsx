import { SelectItem } from "./style";
import { Text, TextStyle, ViewStyle } from "react-native";
import CheckIcon from "../../style/svgs/check.svg";

type Props<T> = {
  value: T;
  title: string | JSX.Element;
  itemPressFunction: (value: T) => void;
  setShowOptions: (isVisible: boolean) => void;
  selected?: boolean;
  style?: ViewStyle;
  selectedStyle?: ViewStyle;
  textStyle?: TextStyle;
};

export function Item<T>({
  value,
  title,
  itemPressFunction,
  setShowOptions,
  selected = false,
  style,
  selectedStyle,
  textStyle,
}: Props<T>) {
  const handleClick = () => {
    itemPressFunction(value);
    setShowOptions(false);
  };
  return (
    <SelectItem
      onPress={handleClick}
      selected={selected}
      style={[style, selected && selectedStyle]}
    >
      <Text style={textStyle}>{title}</Text>
      {selected && selectedStyle && <CheckIcon style={{ marginRight: 14 }} />}
    </SelectItem>
  );
}
