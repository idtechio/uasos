import { useState } from "react";
import { Select, SelectLabel, Options, ItemList, Icon } from "./style";
import { Text, View } from "react-native";
import { useTranslation } from "next-i18next";
import ArrowIcon from "../../style/svgs/arrow.svg";
import { Item } from "./Item";
import { SearchHeader } from "./SearchHeader";
import { DropdownProps } from "./types";

export const Dropdown = ({
  data,
  direction = "to-bottom",
  label,
  selected,
  multiselect,
  itemPressFunction,
  placeholder,
  onBlur,
  searchable = false,
}: DropdownProps) => {
  const [areOptionsVisible, setOptionsAreVisible] = useState(false);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectHeight, setSelectHeight] = useState(0);

  const [filteredData, setFilteredData] = useState(data);

  const selectedItem = (data ?? []).find(({ value }) => value === selected);

  const handleItemPress = (value: any) => {
    itemPressFunction(value);
    onBlur?.();
  };

  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <Item
      title={item.label}
      value={item.value}
      itemPressFunction={handleItemPress}
      setOptionsAreVisible={setOptionsAreVisible}
    />
  );

  return (
    <>
      {label && <SelectLabel>{label}</SelectLabel>}
      <View
        onLayout={(event) => {
          var { width, height } = event.nativeEvent.layout;
          setSelectWidth(width);
          setSelectHeight(height);
        }}
      >
        <Select
          areOptionsVisible={areOptionsVisible}
          onPress={() => setOptionsAreVisible(!areOptionsVisible)}
        >
          <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
          <Icon areOptionsVisible={areOptionsVisible}>
            <ArrowIcon />
          </Icon>
        </Select>
        {areOptionsVisible && (
          <>
            <Options
              style={{
                width: selectWidth + "px",
                top: direction === "to-bottom" ? selectHeight : "unset",
                bottom: direction === "to-top" ? selectHeight : "unset",
                zIndex: "100",
              }}
            >
              <SearchHeader
                data={data}
                searchable={searchable}
                setFilteredData={setFilteredData}
              />
              <ItemList
                data={filteredData}
                renderItem={renderItem}
                keyExtractor={(item) => item.value}
              />
            </Options>
          </>
        )}
      </View>
    </>
  );
};
