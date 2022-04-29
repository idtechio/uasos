import { useEffect, useRef, useState } from "react";

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  ActivityIndicator,
  FlatList,
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
} from "react-native";

import { Container, Input, List, Separator } from "./styles";
import { FieldError } from "react-hook-form";
import { Item } from "./Item";

interface Props {
  error?: FieldError | FieldError[] | undefined;
  placeholder: string;
  onChange: (value: string) => void;
}

export const PlacesAutocomplete = ({ error, placeholder, onChange }: Props) => {
  const containerRef = useRef<HTMLElement>();
  const listRef = useRef<HTMLElement>();

  const [showOptions, setShowOptions] = useState(false);

  const {
    value,
    suggestions: { data, loading },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
    },
    debounce: 300,
  });

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange("");
    setValue(e.nativeEvent.text);
  };

  const handleContainerPress = () => {
    setShowOptions(true);
    setValue(value);
  };

  const handlePress = (cityName: string) => () => {
    clearSuggestions();

    setValue(cityName, false);
    onChange(cityName);
    setShowOptions(false);
  };

  useEffect(() => {
    // @ts-expect-error TODO: fix event type

    const handleClickOutside = (ev) => {
      if (
        containerRef.current &&
        !containerRef.current?.contains(ev.target) &&
        !listRef.current?.contains(ev.target)
      ) {
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

  console.log({ data });

  return (
    <>
      <Container
        error={Boolean(error)}
        // @ts-expect-error TODO: fix ref type
        ref={containerRef}
        onPress={handleContainerPress}
      >
        <Input
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
        {loading ? (
          <ActivityIndicator
            style={{
              position: "absolute",
              right: 15,
            }}
          />
        ) : null}
      </Container>

      {!loading && value && showOptions ? (
        <List
          // @ts-expect-error TODO: fix ref type
          ref={listRef}
        >
          <FlatList
            data={data.filter((item) => item.types.includes("geocode"))}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
              <Item
                label={item.structured_formatting.main_text}
                sublabel={item.structured_formatting.secondary_text}
                onPress={handlePress(item.structured_formatting.main_text)}
              />
            )}
          />

          {!loading && value && data.length === 0 && (
            <Item disabled label="Location not found" />
          )}
        </List>
      ) : null}
    </>
  );
};
