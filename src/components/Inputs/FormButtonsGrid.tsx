import { useCallback, useState } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { FormKey } from "../../helpers/FormTypes";
import ChoiceButton from "../Forms/ChoiceButton";
import CompositionGrid from "../Compositions/CompositionGrid";

type Data = {
  id: FormKey;
  label: string;
  icon: React.ReactNode;
};

type Props = {
  data: Data[];
  error?: FieldError;
  errorMsg?: string;
};

const FormButtonsGrid = ({ data }: Props) => {
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
    <CompositionGrid spaceing={[16, 16]} itemsPerRow={2} disableRwd>
      {data.map(({ id, label, icon }) => {
        return (
          <Controller
            key={id}
            control={control}
            render={({ field: { onChange } }) => (
              <TouchableOpacity
                key={id}
                onPress={() => onTilePress(id, onChange)}
              >
                <ChoiceButton
                  text={label}
                  icon={icon}
                  isChoice={buttonsState.includes(id)}
                />
              </TouchableOpacity>
            )}
            name={id}
          />
        );
      })}
    </CompositionGrid>
  );
};
export default FormButtonsGrid;
