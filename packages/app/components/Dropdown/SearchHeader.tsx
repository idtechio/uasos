import React, { useState, useEffect } from "react";
import { Search } from "./style";
import { TextInput } from "react-native";
import { useTranslation } from "app/common-i18n/use-translation";

type Props<T> = {
  searchable: boolean;
  data: {
    label: string | JSX.Element;
    value: T;
  }[];
  setFilteredData: (data: Props<T>["data"]) => void;
};

export function SearchHeader<T>({
  data,
  searchable,
  setFilteredData,
}: Props<T>) {
  const [text, onChangeText] = useState("");
  const { t } = useTranslation();

  useEffect(() => {
    const textToSearch = text || "";
    const filteredArray = data.filter(({ label }) => {
      if (typeof label === "string") {
        return label.toLocaleLowerCase().includes(textToSearch);
      }
      return label;
    });
    setFilteredData(filteredArray);
  }, [data, setFilteredData, text]);

  return searchable ? (
    <Search>
      <TextInput
        placeholder={t("dropdownSearch")}
        onChangeText={onChangeText}
        value={text}
      />
    </Search>
  ) : null;
}
