import { ReactNode, SetStateAction, useEffect } from "react";
import { useCallback, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { View } from "react-native";

import { FormKey } from "../../helpers/FormTypes";
import { InputControl, InputCotrolLabel } from "../Forms";
import ChoiceButton from "../Forms/ChoiceButton";

export type Data = {
  id: FormKey;
  label: string;
  icon?: ReactNode;
  extra?: ReactNode;
};

type Props = {
  label?: string;
  data: Data[];
};

const FormButtonsVertical = ({ data, label }: Props) => {
  const { control, getValues } = useFormContext();
  const [buttonsState, setButtonsState] = useState<string[]>([]);

  useEffect(() => {
    const initialState: SetStateAction<string[]> = [];

    data.forEach((value: Data) => {
      if (getValues(value.id)) {
        initialState.push(value.id);
      }
    });

    setButtonsState(initialState);
  }, [data, getValues]);

  const onTilePress = useCallback(
    (id: string, onChange: (...event: unknown[]) => void) => {
      setButtonsState((prevState) => {
        const newState = [...prevState];
        if (prevState.includes(id)) {
          onChange(false);
          return newState.filter((v) => v !== id);
        }
        newState.push(id);
        onChange(true);
        return newState;
      });
    },
    []
  );

  return (
    <InputControl>
      {!!label && <InputCotrolLabel>{label}</InputCotrolLabel>}
      {data.map(({ id, label, icon }) => {
        return (
          <Controller
            key={id}
            control={control}
            render={({ field: { onChange } }) => (
              <View key={id}>
                <ChoiceButton
                  key={id}
                  isVertical
                  isSmall
                  onPress={() => onTilePress(id, onChange)}
                  text={label}
                  icon={icon}
                  isSelected={buttonsState.includes(id)}
                />
                {/* {extra && value && extra} */}
              </View>
            )}
            name={id}
          />
        );
      })}
    </InputControl>
  );
};
export default FormButtonsVertical;
