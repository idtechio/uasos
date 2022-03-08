import { useMemo, useState } from "react";
import useFetch from "react-fetch-hook";
import { ActivityIndicator, FlatList } from "react-native";
import debounce from "lodash.debounce";

import type { InputProps } from "./types";
import { InputRow, TextInput, Dropdown, Separator } from "./style";
import Item from "./Item";

type Response = {
  predictions: { structured_formatting: { main_text: string } }[];
};

const Autocomplete = ({ label, onChange, value = "", error }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);
  const [query, setQuery] = useState(value);
  const [text, setText] = useState(value);
  const [isOpen, setIsOpen] = useState(false);

  const { isLoading, data } = useFetch<Response>(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${query}&key=${process.env.GOOGLE_API_KEY}`
  );

  const debouncedFunction = debounce(setQuery, 1000);

  const onTextChange = (newText: string) => {
    setText(newText);
    debouncedFunction(newText);
    !isOpen && setIsOpen(true);
  };

  const onItemSelected = (newValue: string) => {
    onChange && onChange(newValue);
    setInputValue(newValue);
    setText(newValue);
    setIsOpen(false);
  };

  const onBlur = () => {
    setTimeout(() => setIsOpen(false), 300);
    setText(inputValue);
  };

  const predictions = useMemo(() => {
    return (
      data?.predictions.map(
        (prediction) => prediction?.structured_formatting?.main_text
      ) || []
    );
  }, [data]);

  return (
    <>
      <InputRow>
        <TextInput
          onChangeText={onTextChange}
          value={text}
          placeholder={label}
          error={error}
          onBlur={onBlur}
        />
        {isLoading && <ActivityIndicator />}
      </InputRow>

      {isOpen && (
        <Dropdown>
          <FlatList
            data={predictions}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
              <Item onPress={onItemSelected} label={item} value={item} />
            )}
          />
          {!isLoading && predictions.length === 0 && (
            <Item disabled label="Location not found" />
          )}
        </Dropdown>
      )}
    </>
  );
};

export default Autocomplete;
