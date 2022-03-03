import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectLabel,
  Options,
  ItemList,
  Icon,
  PlaceholderText,
  SelectText,
  Pill,
} from "./style";
import { Platform, View } from "react-native";
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
  const containerRef = useRef<any>();
  const [showOptions, setShowOptions] = useState(false);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectHeight, setSelectHeight] = useState(0);

  const [filteredData, setFilteredData] = useState(data);

  const selectedValues = Array.isArray(selected)
    ? selected
    : [selected].filter(Boolean);

  const selectedItems = (data ?? []).filter(({ value }) =>
    selectedValues.includes(value)
  );

  const handleItemPress = (value: any) => {
    itemPressFunction(value);
    onBlur?.();
  };

  const renderItem = ({ item }) => (
    <Item
      title={item.label}
      value={item.value}
      itemPressFunction={handleItemPress}
      setShowOptions={multiselect ? () => {} : setShowOptions}
      selected={multiselect && selectedValues.includes(item.value)}
    />
  );

  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (containerRef.current && !containerRef.current?.contains(ev.target)) {
        setShowOptions(false);
      }
    };

    if (containerRef.current && Platform.OS === "web" && showOptions) {
      document.body.addEventListener("click", handleClickOutside);
    }

    return () => {
      if (Platform.OS === "web") {
        document.body.removeEventListener("click", handleClickOutside);
      }
    };
  }, [showOptions]);

  return (
    <>
      {label && <SelectLabel>{label}</SelectLabel>}
      <View
        onLayout={(event) => {
          setSelectWidth(event.nativeEvent.layout.width);
          setSelectHeight(event.nativeEvent.layout.height);
        }}
        ref={containerRef}
      >
        <Select
          isInvalid={!!error}
          showOptions={showOptions}
          onPress={() => {
            if (showOptions) {
              onBlur?.();
            }

            setShowOptions(!showOptions);
          }}
        >
          <SelectText>
            {selectedItems.length > 0 ? (
              multiselect ? (
                selectedItems.map(({ label, value }) => (
                  <Pill key={value}>{label}</Pill>
                ))
              ) : (
                selectedItems[0].label
              )
            ) : (
              <PlaceholderText numberOfLines={1}>{placeholder}</PlaceholderText>
            )}
          </SelectText>
          <Icon showOptions={showOptions}>
            <ArrowIcon />
          </Icon>
        </Select>

        {showOptions && (
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
