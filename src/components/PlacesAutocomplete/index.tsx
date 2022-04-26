import { useEffect, useRef, useState } from "react";

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  NativeSyntheticEvent,
  Platform,
  Text,
  TextInputChangeEventData,
} from "react-native";

import ArrowIcon from "../../style/svgs/arrow.svg";

import { IconWrapper, Container, Input, List, Item } from "./styles";

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

export const PlacesAutocomplete = ({ placeholder, onChange }: Props) => {
  const containerRef = useRef<HTMLElement>();
  const [showOptions, setShowOptions] = useState(false);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChange("");
    setValue(e.nativeEvent.text);
  };

  const handleContainerPress = () => {
    setShowOptions(true);
  };

  const toggleList = () => {
    setShowOptions((pShowOptions) => !pShowOptions);
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

  const handlePress = (cityName: string) => () => {
    clearSuggestions();

    setValue(cityName, false);
    onChange(cityName);
  };

  return (
    <Container
      // @ts-expect-error TODO: fix ref type
      ref={containerRef}
      onPress={handleContainerPress}
    >
      <Input placeholder={placeholder} value={value} onChange={handleChange} />
      <IconWrapper onPress={toggleList} showOptions={showOptions}>
        <ArrowIcon />
      </IconWrapper>

      <List>
        {data.map((suggestion) => (
          <Item
            onPress={handlePress(suggestion.structured_formatting.main_text)}
            key={suggestion.place_id}
          >
            <Text>{suggestion.structured_formatting.main_text}</Text>
          </Item>
        ))}
      </List>
    </Container>
  );
};
