import { SelectItem } from "./style";
import { Text, View } from "react-native";

export const Item = ({
  value,
  title,
  itemPressFunction,
  setOptionsAreVisible,
  selected = false,
}: {
  value: any;
  title: string;
  itemPressFunction(value: any): void;
  setOptionsAreVisible(isVisible: boolean): void;
  selected?: boolean;
}) => {
  const handleClick = () => {
    itemPressFunction(value);
    setOptionsAreVisible(false);
  };
  return (
    <SelectItem onPress={handleClick} selected={selected}>
      <Text>{title}</Text>
    </SelectItem>
  );
};
