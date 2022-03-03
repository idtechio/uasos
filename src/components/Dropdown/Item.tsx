import { SelectItem } from "./style";
import { Text } from "react-native";

export const Item = ({
  value,
  title,
  itemPressFunction,
  setShowOptions,
  selected = false,
}: {
  value: any;
  title: string;
  itemPressFunction(value: any): void;
  setShowOptions(isVisible: boolean): void;
  selected?: boolean;
}) => {
  const handleClick = () => {
    itemPressFunction(value);
    setShowOptions(false);
  };
  return (
    <SelectItem onPress={handleClick} selected={selected}>
      <Text>{title}</Text>
    </SelectItem>
  );
};
