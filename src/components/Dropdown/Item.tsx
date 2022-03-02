import { SelectItem } from "./style";
import { Text, View } from "react-native";

export const Item = ({
  title,
  itemPressFunction,
  setOptionsAreVisible,
}: {
  title: string;
  itemPressFunction(): void;
  setOptionsAreVisible(isVisible: boolean): void;
}) => {
  const handleClick = () => {
    itemPressFunction();
    setOptionsAreVisible(false);
  };
  return (
    <SelectItem onPress={handleClick}>
      <Text>{title}</Text>
    </SelectItem>
  );
};
