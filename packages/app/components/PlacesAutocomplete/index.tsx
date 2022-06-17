import React, { useEffect, useRef, useState } from "react";

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  FlatList,
  NativeSyntheticEvent,
  Platform,
  TextInputChangeEventData,
} from "react-native";

import { Container, Input, List, Separator, ActivityIndicator } from "./styles";
import { FieldError } from "react-hook-form";
import { Item } from "./Item";
import { CountryCode, SelectedCountry } from "./type";

interface Props {
  value: string;
  selectedCountry: SelectedCountry;
  error?: FieldError | FieldError[] | undefined;
  placeholder: string;
  onChange: (value: string) => void;
}

export const PlacesAutocomplete = ({
  value,
  error,
  onChange,
  placeholder,
  selectedCountry,
}: Props) => {
  const containerRef = useRef<HTMLElement>();
  const listRef = useRef<HTMLElement>();

  const [showOptions, setShowOptions] = useState(false);

  const {
    value: localValue,
    suggestions: { data, loading },
    setValue: setLocalValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      types: ["(cities)"],
      componentRestrictions: {
        country: CountryCode[selectedCountry],
      },
    },
    cache: false,
    debounce: 300,
  });

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange("");
    setLocalValue(e.nativeEvent.text);
  };

  const handleContainerPress = () => {
    setShowOptions(true);
    setLocalValue(localValue);
  };

  const handlePress = (cityName: string) => () => {
    clearSuggestions();

    setLocalValue(cityName, false);
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
          value={localValue || value}
          onChange={handleChange}
        />
        {loading ? <ActivityIndicator /> : null}
      </Container>

      {!loading && localValue && showOptions ? (
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
