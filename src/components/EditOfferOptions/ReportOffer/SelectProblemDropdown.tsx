import { useTranslation } from "next-i18next";
import { useContext, useEffect, useState } from "react";
import { EditOfferContext } from "../EditOfferButton/index";
import React from "react";
import { Dropdown } from "../../Dropdown";
import { DropdownStyles, StyledLabel } from "./style";
import { PROBLEM_TYPES } from "./constans";

const Label = ({ children }: { children: string }) => (
  <StyledLabel>{children}</StyledLabel>
);

type DataItem = { label: JSX.Element; value: string };

interface Props {
  problemType: string | null;
  onSelect(problem: string | null): void;
}
export default function SelectProblemDropdown({
  problemType,
  onSelect,
}: Props) {
  const { t } = useTranslation();
  const { targetType } = useContext(EditOfferContext);
  const [data, setData] = useState<Array<DataItem>>([]);

  useEffect(() => {
    const dropDownData: DataItem[] = PROBLEM_TYPES.filter(
      (item) => item.targetType === targetType || !item.targetType
    ).map((item) => ({
      label: <Label>{item.label}</Label>,
      value: item.value,
    }));
    setData(dropDownData);
  }, [problemType]);

  return (
    <Dropdown
      styles={DropdownStyles}
      placeholder={t("others:forms.generic.selectFromList")}
      data={PROBLEM_TYPES}
      selected={problemType}
      itemPressFunction={onSelect}
    />
  );
}
