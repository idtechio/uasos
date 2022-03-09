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
  PillContainer,
} from "./style";
import { Platform, View } from "react-native";
import ArrowIcon from "../../style/svgs/arrow.svg";
import { Item } from "./Item";
import { SearchHeader } from "./SearchHeader";
import { DropdownProps } from "./types";

export function Dropdown<T>({
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
}: DropdownProps<T>) {
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

  const handleItemPress = (value: T) => {
    itemPressFunction(value);
    onBlur?.();
  };

  const renderItem = ({ item }) => (
    <Item<T>
      title={item.label}
      value={item.value}
      itemPressFunction={handleItemPress}
      setShowOptions={multiselect ? () => undefined : setShowOptions}
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
      {label ? <SelectLabel>{label}</SelectLabel> : null}
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
                <PillContainer>
                  {selectedItems.map(({ label, value }) => (
                    <Pill key={value}>{label}</Pill>
                  ))}
                </PillContainer>
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

        {showOptions ? (
          <>
            <Options
              selectWidth={selectWidth}
              selectHeight={selectHeight}
              direction={direction}
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
        ) : null}
      </View>
    </>
  );
}
