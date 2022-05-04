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
import { ListRenderItem, Platform, View } from "react-native";
import ArrowIcon from "../../style/svgs/arrow.svg";
import { Item } from "./Item";
import { SearchHeader } from "./SearchHeader";
import { DropdownProps } from "./types";

export function Dropdown<T>({
  data,
  label,
  error,
  onBlur,
  styles,
  selected,
  multiselect,
  placeholder,
  itemPressFunction,
  searchable = false,
  direction = "to-bottom",
  itemListAutoHeight = false,
  highlightSelectedItem = false,
}: DropdownProps<T>) {
  const containerRef = useRef<HTMLElement>();
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

  const renderItem: ListRenderItem<unknown> = ({ item }) => {
    const selectedValuesIncludeItem = selectedValues.includes(
      (item as typeof data[number]).value
    );

    const isItemSelected =
      (multiselect && selectedValuesIncludeItem) ||
      (!multiselect && highlightSelectedItem && selectedValuesIncludeItem);

    return (
      <Item<T>
        title={(item as typeof data[number]).label}
        value={(item as typeof data[number]).value}
        itemPressFunction={handleItemPress}
        setShowOptions={multiselect ? () => undefined : setShowOptions}
        style={styles?.item}
        textStyle={styles?.itemTextStyle}
        selectedStyle={styles?.itemSelected}
        selected={isItemSelected}
      />
    );
  };

  useEffect(() => {
    // @ts-expect-error TODO: fix event type
    const handleClickOutside = (ev) => {
      if (containerRef.current && !containerRef.current?.contains(ev.target)) {
        setShowOptions(false);
      }
    };

    if (containerRef.current && Platform.OS === "web" && showOptions) {
      document.body.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      if (Platform.OS === "web") {
        document.body.removeEventListener("click", handleClickOutside, true);
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
        // @ts-expect-error TODO: fix ref type
        ref={containerRef}
        style={styles?.wrapper}
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
          style={styles?.select}
        >
          <SelectText>
            {selectedItems.length > 0 ? (
              multiselect ? (
                <PillContainer>
                  {selectedItems.map(({ label, value }) => (
                    <Pill key={String(value)}>{label}</Pill>
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
                autoHeight={itemListAutoHeight}
                keyExtractor={(item) => {
                  return String((item as typeof filteredData[number]).value);
                }}
              />
            </Options>
          </>
        ) : null}
      </View>
    </>
  );
}
