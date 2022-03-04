import { VFC } from "react";
import { Controller, FieldError, useFormContext } from "react-hook-form";

import { FormKey } from "../../helpers/FormTypes";
import FormDropdown from "./FormDropdown";
import CITY_LIST_AT from "../../consts/cities/at.json";
import CITY_LIST_BE from "../../consts/cities/be.json";
import CITY_LIST_BG from "../../consts/cities/bg.json";
import CITY_LIST_CY from "../../consts/cities/cy.json";
import CITY_LIST_CZ from "../../consts/cities/cz.json";
import CITY_LIST_DE from "../../consts/cities/de.json";
import CITY_LIST_DK from "../../consts/cities/dk.json";
import CITY_LIST_ES from "../../consts/cities/es.json";
import CITY_LIST_EW from "../../consts/cities/ew.json";
import CITY_LIST_FI from "../../consts/cities/fi.json";
import CITY_LIST_FR from "../../consts/cities/fr.json";
import CITY_LIST_GR from "../../consts/cities/gr.json";
import CITY_LIST_HR from "../../consts/cities/hr.json";
import CITY_LIST_HU from "../../consts/cities/hu.json";
import CITY_LIST_IE from "../../consts/cities/ie.json";
import CITY_LIST_IT from "../../consts/cities/it.json";
import CITY_LIST_LT from "../../consts/cities/lt.json";
import CITY_LIST_LU from "../../consts/cities/lu.json";
import CITY_LIST_LV from "../../consts/cities/lv.json";
import CITY_LIST_MT from "../../consts/cities/mt.json";
import CITY_LIST_NL from "../../consts/cities/nl.json";
import CITY_LIST_PL from "../../consts/cities/pl.json";
import CITY_LIST_PT from "../../consts/cities/pt.json";
import CITY_LIST_RO from "../../consts/cities/ro.json";
import CITY_LIST_SE from "../../consts/cities/se.json";
import CITY_LIST_SI from "../../consts/cities/si.json";
import CITY_LIST_SK from "../../consts/cities/sk.json";
import CITY_LIST_UK from "../../consts/cities/uk.json";

type Props = {
  name: FormKey;
  country: string;
  label?: string;
  zIndex?: number;
  placeholder?: string;
  error?: FieldError;
  multiSelect?: boolean;
  errorMsg?: string;
  onChange?: (selected: string | string[]) => void;
} & Pick<React.ComponentProps<typeof Controller>, "rules">;

const FormTextInput: VFC<Props> = (props) => {
  const {
    name,
    label,
    country,
    errorMsg,
    rules,
    error,
    zIndex,
    placeholder,
    multiSelect,
    onChange,
  } = props;
  const { control } = useFormContext();
  let cityList = [];

  switch (country) {
    case "AT":
      cityList = CITY_LIST_AT;
      break;
    case "BE":
      cityList = CITY_LIST_BE;
      break;
    case "BG":
      cityList = CITY_LIST_BG;
      break;
    case "CY":
      cityList = CITY_LIST_CY;
      break;
    case "CZ":
      cityList = CITY_LIST_CZ;
      break;
    case "DE":
      cityList = CITY_LIST_DE;
      break;
    case "DK":
      cityList = CITY_LIST_DK;
      break;
    case "ES":
      cityList = CITY_LIST_ES;
      break;
    case "EW":
      cityList = CITY_LIST_EW;
      break;
    case "FI":
      cityList = CITY_LIST_FI;
      break;
    case "FR":
      cityList = CITY_LIST_FR;
      break;
    case "GR":
      cityList = CITY_LIST_GR;
      break;
    case "HR":
      cityList = CITY_LIST_HR;
      break;
    case "HU":
      cityList = CITY_LIST_HU;
      break;
    case "IE":
      cityList = CITY_LIST_IE;
      break;
    case "IT":
      cityList = CITY_LIST_IT;
      break;
    case "LT":
      cityList = CITY_LIST_LT;
      break;
    case "LU":
      cityList = CITY_LIST_LU;
      break;
    case "LV":
      cityList = CITY_LIST_LV;
      break;
    case "MT":
      cityList = CITY_LIST_MT;
      break;
    case "NL":
      cityList = CITY_LIST_NL;
      break;
    case "PL":
      cityList = CITY_LIST_PL;
      break;
    case "PT":
      cityList = CITY_LIST_PT;
      break;
    case "RO":
      cityList = CITY_LIST_RO;
      break;
    case "SE":
      cityList = CITY_LIST_SE;
      break;
    case "SI":
      cityList = CITY_LIST_SI;
      break;
    case "SK":
      cityList = CITY_LIST_SK;
      break;
    case "UK":
      cityList = CITY_LIST_UK;
      break;
    case "":
    case undefined:
      break;
    default:
      console.warn(`Unkown contry: ${country}`);
  }

  return (
    <Controller
      control={control}
      rules={rules}
      render={() => (
        <FormDropdown
          zIndex={zIndex}
          data={cityList}
          name={name}
          placeholder={placeholder}
          rules={rules}
          error={error}
          label={label}
          errorMsg={errorMsg}
          multiSelect={multiSelect}
          onChange={onChange}
        />
      )}
      name={name}
    />
  );
};
export default FormTextInput;
