import { useCallback, useState } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";
import { FormKey } from "../../helpers/FormTypes";
import ChoiceButton from "../Forms/ChoiceButton";
import CompositionGrid from "../Compositions/CompositionGrid";

type Data = {
  id: FormKey;
  label: string;
  icon?: React.ReactNode;
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
    <CompositionGrid spaceing={[16, 16]} itemsPerRow={2} disableRwd>
      {data.map(({ id, label, icon }) => {
        return (
          <Controller
            key={id}
            control={control}
            render={({ field: { onChange } }) => (
              <ChoiceButton
                key={id}
                onPress={() => onTilePress(id, onChange)}
                text={label}
                icon={icon}
                isSelected={buttonsState.includes(id)}
              />
            )}
            name={id}
          />
        );
      })}
    </CompositionGrid>
  );
};
export default FormButtonsGrid;
