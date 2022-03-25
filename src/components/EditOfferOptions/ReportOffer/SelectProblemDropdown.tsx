import React, { useState } from "react";
import { Dropdown } from "../../Dropdown";
import { DropdownStyles, StyledLabel } from "./style";

const Label = ({ children }: { children: string }) => (
  <StyledLabel>{children}</StyledLabel>
);

const PROBLEM_TYPES = [
  {
    label: <Label>Problem 1</Label>,
    value: "problem1",
  },
  { label: <Label>Problem 2</Label>, value: "problem2" },
  {
    label: <Label>Problem 3</Label>,
    value: "problem3",
  },
  { label: <Label>Problem 4</Label>, value: "problem4" },
];

export default function SelectProblemDropdown() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Dropdown
      styles={DropdownStyles}
      placeholder="Select from the list"
      data={PROBLEM_TYPES}
      selected={value}
      itemPressFunction={setValue}
    />
  );
}
