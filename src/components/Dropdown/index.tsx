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
  multiselect,
  itemPressFunction,
  searchable = false,
}: DropdownProps) => {
  const [areOptionsVisible, setOptionsAreVisible] = useState(false);
  const [selectWidth, setSelectWidth] = useState(0);
  const [filteredData, setFilteredData] = useState(data);

  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <Item
      title={item.value}
      itemPressFunction={itemPressFunction}
      setOptionsAreVisible={setOptionsAreVisible}
    />
  );
  return (
    <>
      {label && <SelectLabel>{label}</SelectLabel>}
      <View
        onLayout={(event) => {
          var { width } = event.nativeEvent.layout;
          setSelectWidth(width);
        }}
      >
        <Select
          areOptionsVisible={areOptionsVisible}
          onPress={() => setOptionsAreVisible(!areOptionsVisible)}
        >
          <Text>{t("dropdownChoose")}</Text>
          <Icon areOptionsVisible={areOptionsVisible}>
            <ArrowIcon />
          </Icon>
        </Select>
        {areOptionsVisible && (
          <>
            <Options
              style={{
                width: selectWidth + "px",
                top: direction === "to-bottom" ? "45px" : "unset",
                bottom: direction === "to-top" ? "45px" : "unset",
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
