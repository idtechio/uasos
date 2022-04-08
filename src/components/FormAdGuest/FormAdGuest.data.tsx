import { Data } from "../Inputs/FormButtonsVertcal";
import AnimalsIcon from "../../style/svgs/animals.svg";
import FormTextInput from "../Inputs/FormTextInput";
import PregnantIcon from "../../style/svgs/pregnant.svg";
import ElderIcon from "../../style/svgs/elder.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";

export const refugeeDetailsOptions: Data[] = [
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

export const GROUP_RELATIONS = [
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

export const ACCOMMODATION_TYPES = [
  { label: "staticValues.accommodationTypes.bed", value: "bed" },
  { label: "staticValues.accommodationTypes.room", value: "room" },
  { label: "staticValues.accommodationTypes.flat", value: "flat" },
  { label: "staticValues.accommodationTypes.house", value: "house" },
  {
    label: "staticValues.accommodationTypes.collective",
    value: "collective",
  },
];

export const OVERNIGHT_DURATION_TYPES = [
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
