import { TouchableOpacity, View } from "react-native";

import {
  Filter,
  FilterModal,
  FilterBox,
  FilterBoxHeader,
  FilterBoxFooter,
  styles,
  FilterBoxButton,
  FilterBoxButtonText,
  FilterBoxButtonCancel,
} from "./style";
import { ButtonDefault } from "../Buttons";
import ModalPortal from "../../helpers/Portal";
import { useState } from "react";

const SingleFilter = ({
  value,
  name,
  options = [],
  onSubmit = (value: any) => {},
}) => {
  const [visible, setFilterVisible] = useState(false);
  const [val, setVal] = useState(value);
  return (
    <Filter>
      {visible && (
        <ModalPortal>
          <FilterModal>
            <FilterBox>
              <FilterBoxHeader>
                <TouchableOpacity
                  onPress={() => setFilterVisible(false)}
                  style={{ position: "absolute" }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM10 8.59L13.59 5L15 6.41L11.41 10L15 13.59L13.59 15L10 11.41L6.41 15L5 13.59L8.59 10L5 6.41L6.41 5L10 8.59Z"
                      fill="#003566"
                      fill-opacity="0.5"
                    />
                  </svg>
                </TouchableOpacity>
                {name}
              </FilterBoxHeader>
              <View style={styles.content}>
                <select onChange={(e) => setVal(e.target.value)}>
                  {options.map((option) => (
                    <option selected={val == option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </View>
              <FilterBoxFooter>
                <TouchableOpacity
                  onPress={() => {
                    onSubmit(val);
                    setFilterVisible(false);
                  }}
                >
                  <FilterBoxButton>
                    <FilterBoxButtonText>Pokaż wyniki</FilterBoxButtonText>
                  </FilterBoxButton>
                </TouchableOpacity>
                {value && (
                  <TouchableOpacity
                    onPress={() => {
                      onSubmit(null);
                      setFilterVisible(false);
                    }}
                  >
                    <FilterBoxButtonCancel>
                      <FilterBoxButtonText>Usuń filtr</FilterBoxButtonText>
                    </FilterBoxButtonCancel>
                  </TouchableOpacity>
                )}
              </FilterBoxFooter>
            </FilterBox>
          </FilterModal>
        </ModalPortal>
      )}
      <ButtonDefault
        anchor={`${name}${value ? `: ${value}` : ""} `}
        onPress={() => setFilterVisible(true)}
      />
    </Filter>
  );
};

export default SingleFilter;
