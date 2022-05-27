import React from "react";
import AnimalsIcon from "../../style/svgs/animals.svg";
import FormTextInput from "../Inputs/FormTextInput";
import PregnantIcon from "../../style/svgs/pregnant.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import { ReactNode } from "react";
import { FormKey } from "../../helpers/FormTypes";

type RefugeeDetailLabelType =
  | "animals"
  | "pregnant"
  | "oldPerson"
  | "disability";

type RefugeeDetailLabel =
  `refugeeForm.refugeeDetailsOptions.${RefugeeDetailLabelType}`;

interface RefugeeDetailsOptions {
  id: FormKey;
  label: RefugeeDetailLabel;
  icon?: ReactNode;
  extra?: ReactNode;
}

export const refugeeDetailsOptions: Array<RefugeeDetailsOptions> = [
  {
    id: "advancedRefugee.preferences.peopleDetails.animals",
    label: "refugeeForm.refugeeDetailsOptions.animals",
    icon: <AnimalsIcon width="30" height="25" />,
    extra: (
      <FormTextInput
        name="advancedRefugee.preferences.animal"
        label={"refugeeForm.labels.refugeesAnimal"}
      />
    ),
  },
  {
    id: "advancedRefugee.preferences.peopleDetails.pregnant",
    label: "refugeeForm.refugeeDetailsOptions.pregnant",
    icon: <PregnantIcon width="26" height="25" />,
  },
  {
    id: "advancedRefugee.preferences.peopleDetails.oldPerson",
    label: "refugeeForm.refugeeDetailsOptions.oldPerson",
    icon: <ElderIcon width="26" height="25" />,
  },
  {
    id: "advancedRefugee.preferences.peopleDetails.disability",
    label: "refugeeForm.refugeeDetailsOptions.disability",
    icon: <DisabilityIcon width="26" height="25" />,
  },
];

type GroupRelationLabelType =
  | "single_man"
  | "single_woman"
  | "spouses"
  | "mother_with_children"
  | "family_with_children"
  | "unrelated_group";

type GroupRelationLabel =
  `staticValues.groupRelations.${GroupRelationLabelType}`;

interface GroupRelations {
  label: GroupRelationLabel;
  value: string;
}

export const GROUP_RELATIONS: Array<GroupRelations> = [
  { label: "staticValues.groupRelations.single_man", value: "single_man" },
  {
    label: "staticValues.groupRelations.single_woman",
    value: "single_woman",
  },
  { label: "staticValues.groupRelations.spouses", value: "spouses" },
  {
    label: "staticValues.groupRelations.mother_with_children",
    value: "mother_with_children",
  },
  {
    label: "staticValues.groupRelations.family_with_children",
    value: "family_with_children",
  },
  {
    label: "staticValues.groupRelations.unrelated_group",
    value: "unrelated_group",
  },
];

type AccommodationLabelType = "bed" | "room" | "flat" | "house" | "collective";

type AccommodationLabel =
  `staticValues.accommodationTypes.${AccommodationLabelType}`;

interface AccommodationTypes {
  label: AccommodationLabel;
  value: string;
}

export const ACCOMMODATION_TYPES: Array<AccommodationTypes> = [
  { label: "staticValues.accommodationTypes.bed", value: "bed" },
  { label: "staticValues.accommodationTypes.room", value: "room" },
  { label: "staticValues.accommodationTypes.flat", value: "flat" },
  { label: "staticValues.accommodationTypes.house", value: "house" },
  {
    label: "staticValues.accommodationTypes.collective",
    value: "collective",
  },
];

type OverNightDurationLabelType =
  | "lessThanAWeek"
  | "week"
  | "twoWeeks"
  | "month"
  | "longer";

type OverNightDurationLabel =
  `staticValues.timePeriod.${OverNightDurationLabelType}`;

interface OverNightDurationTypes {
  label: OverNightDurationLabel;
  value: string;
}

export const OVERNIGHT_DURATION_TYPES: Array<OverNightDurationTypes> = [
  {
    label: "staticValues.timePeriod.lessThanAWeek",
    value: "less_than_1_week",
  },
  { label: "staticValues.timePeriod.week", value: "1_week" },
  {
    label: "staticValues.timePeriod.twoWeeks",
    value: "2_3_weeks",
  },
  { label: "staticValues.timePeriod.month", value: "month" },
  { label: "staticValues.timePeriod.longer", value: "longer" },
];
