import { useState } from "react";
import { Select, SelectLabel, Options, ItemList } from "./style";
import { Text, View, TouchableOpacity } from "react-native";
import { useTranslation } from "next-i18next";
import ArrowIcon from "../../style/svgs/arrow.svg";
import { Item } from "./Item";
import { SearchHeader } from "./SearchHeader";

export const Dropdown = ({
  data,
  direction = "to-bottom",
  label,
  multiselect,
  itemPressFunction,
  searchable = false,
}: {
  data: any;
  direction?: "to-bottom" | "to-top";
  label?: string;
  multiselect?: boolean;
  itemPressFunction: any;
  searchable?: boolean;
}) => {
  const [areOptionsVisible, setOptionsAreVisible] = useState(false);
  const [selectWidth, setSelectWidth] = useState(0);
  const [selectPosX, setSelectPosX] = useState(0);
  const [selectPosY, setSelectPosY] = useState(0);
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
          var { x, y, width } = event.nativeEvent.layout;
          setSelectWidth(width);
          setSelectPosY(y);
          if (direction === "to-top") {
            setSelectPosX(x + 157);
          } else {
            setSelectPosX(x + 45);
          }
        }}
      >
        <Select onPress={() => setOptionsAreVisible(true)}>
          <Text>{t("dropdownChoose")}</Text>
          <ArrowIcon />
        </Select>
        {areOptionsVisible && (
          <>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setOptionsAreVisible(false)}
              style={{
                backgroundColor: "rgba(0,0,0, 0.2)",
                position: "fixed",
                width: "100vw",
                height: "100vh",
                top: 0,
                left: 0,
              }}
            ></TouchableOpacity>
            <Options
              style={{
                width: selectWidth + "px",
                left: selectPosY + "px",
                top: direction === "to-bottom" ? selectPosX + "px" : "unset",
                bottom: direction === "to-top" ? selectPosX + "px" : "unset",
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
