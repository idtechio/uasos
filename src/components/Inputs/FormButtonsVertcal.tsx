import { ReactNode } from "react";
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
  const { control } = useFormContext();
  const [buttonsState, setButtonsState] = useState<string[]>([]);

  const onTilePress = useCallback(
    (id: string, onChange: (...event: any[]) => void) => {
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
      {data.map(({ id, label, icon, extra }) => {
        return (
          <Controller
            key={id}
            control={control}
            render={({ field: { onChange, value } }) => (
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
