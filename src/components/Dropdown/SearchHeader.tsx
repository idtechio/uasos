import { useState, useEffect } from "react";
import { Search } from "./style";
import { TextInput } from "react-native";

export const SearchHeader = ({ data, searchable, setFilteredData }) => {
  const [text, onChangeText] = useState("");

  useEffect(() => {
    var textToSearch = text || "";
    var filteredArray = data.filter(({ label }) => {
      return label.includes(textToSearch);
    });
    setFilteredData(filteredArray);
  }, [data, setFilteredData, text]);

  return (
    <>
      {searchable && (
        <Search>
          <TextInput
            placeholder="szukaj..."
            onChangeText={onChangeText}
            value={text}
          />
        </Search>
      )}
    </>
  );
};
