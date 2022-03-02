import { useState, useEffect } from "react";
import { Select, SelectLabel, Options, ItemList } from "./style";
import { Text, View, Modal, TouchableOpacity, TextInput } from "react-native";
import { useTranslation } from "next-i18next";
import ArrowIcon from "../../style/svgs/arrow.svg";
import { Item } from "./Item";
import { SearchHeader } from "./SearchHeader";

export const Dropdown = ({
  data,
  direction,
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

  let defaultDirection = direction ? direction : "to-bottom";

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
          if (defaultDirection === "to-top") {
            setSelectPosX(x + 157);
          } else {
            setSelectPosX(x + 40);
          }
        }}
      >
        <Select onPress={() => setOptionsAreVisible(true)}>
          <Text>{t("choose")}</Text>
          <ArrowIcon />
        </Select>
      </View>
      <Modal
        transparent
        visible={areOptionsVisible}
        animationType="fade"
        onRequestClose={() => setOptionsAreVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          //TO DO set this to false to test the filter input
          // set to true to have it close on click
          onPress={() => setOptionsAreVisible(false)}
          style={{
            backgroundColor: "rgba(0,0,0, 0.2)",
            flex: 1,
          }}
        >
          {areOptionsVisible && (
            <Options
              style={{
                width: selectWidth + "px",
                left: selectPosY + "px",
                top: direction === "to-bottom" ? selectPosX + "px" : "unset",
                bottom: direction === "to-top" ? selectPosX + "px" : "unset",
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
          )}
        </TouchableOpacity>
      </Modal>
    </>
  );
};
