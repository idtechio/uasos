import { useState } from "react";
import {
  Select,
  SelectLabel,
  Options,
  ItemList,
  Icon,
  PlaceholderText,
  SelectText,
} from "./style";
import { View } from "react-native";
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
  error,
  onBlur,
  searchable = false,
}: DropdownProps) => {
  const { t } = useTranslation();

  const [showOptions, setShowOptions] = useState(false);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectHeight, setSelectHeight] = useState(0);

  const [filteredData, setFilteredData] = useState(data);

  const selectedItem = (data ?? []).find(({ value }) => value === selected);

  const handleItemPress = (value: any) => {
    itemPressFunction(value);
    onBlur?.();
  };

  const renderItem = ({ item }) => (
    <Item
      title={item.label}
      value={item.value}
      itemPressFunction={handleItemPress}
      setShowOptions={setShowOptions}
    />
  );

  return (
    <>
      {label && <SelectLabel>{label}</SelectLabel>}
      <View
        onLayout={(event) => {
          setSelectWidth(event.nativeEvent.layout.width);
          setSelectHeight(event.nativeEvent.layout.height);
        }}
      >
        <Select
          isInvalid={!!error}
          areOptionsVisible={areOptionsVisible}
          onPress={() => {
            if (areOptionsVisible) {
              onBlur?.();
            }

            setOptionsAreVisible(!areOptionsVisible);
          }}
        >
          <SelectText>
            {selectedItem ? (
              selectedItem.label
            ) : (
              <PlaceholderText numberOfLines={1}>{placeholder}</PlaceholderText>
            )}
          </SelectText>
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
