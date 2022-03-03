import { SelectItem } from "./style";
import { Text } from "react-native";

export const Item = ({
  title,
  itemPressFunction,
  setShowOptions,
  setSelectValue,
}: {
  title: string;
  itemPressFunction(): any;
  setShowOptions(isVisible: boolean): void;
  setSelectValue: any;
}) => {
  const handleClick = () => {
    itemPressFunction();
    setShowOptions(false);
    setSelectValue(title);
  };
  return (
    <SelectItem onPress={handleClick}>
      <Text>{title}</Text>
    </SelectItem>
  );
};
