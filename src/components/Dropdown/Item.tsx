import { SelectItem } from "./style";
import { Text } from "react-native";

export const Item = ({
  value,
  title,
  itemPressFunction,
  setShowOptions,
  setSelectValue,
}: {
  value: any;
  title: string;
  itemPressFunction(value: any): void;
  setOptionsAreVisible(isVisible: boolean): void;
}) => {
  const handleClick = () => {
    itemPressFunction(value);
    setOptionsAreVisible(false);
  };
  return (
    <SelectItem onPress={handleClick}>
      <Text>{title}</Text>
    </SelectItem>
  );
};
