import { SelectItem } from "./style";
import { Text } from "react-native";

type Props<T> = {
  value: T;
  title: string;
  itemPressFunction: (value: T) => void;
  setShowOptions: (isVisible: boolean) => void;
  selected?: boolean;
};

export function Item<T>({
  value,
  title,
  itemPressFunction,
  setShowOptions,
  selected = false,
}: Props<T>) {
  const handleClick = () => {
    itemPressFunction(value);
    setShowOptions(false);
  };
  return (
    <SelectItem onPress={handleClick} selected={selected}>
      <Text>{title}</Text>
    </SelectItem>
  );
}
