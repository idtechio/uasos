import { useState, useEffect } from "react";
import { Search } from "./style";
import { TextInput } from "react-native";
import { useTranslation } from "next-i18next";

export const SearchHeader = ({ data, searchable, setFilteredData }) => {
  const [text, onChangeText] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const textToSearch = text || "";
    const filteredArray = data.filter(({ label }) => {
      return label.toLocaleLowerCase().includes(textToSearch);
    });
    setFilteredData(filteredArray);
  }, [data, setFilteredData, text]);

  return (
    <>
      {searchable && (
        <Search>
          <TextInput
            placeholder={t("dropdownSearch")}
            onChangeText={onChangeText}
            value={text}
          />
        </Search>
      )}
    </>
  );
};
