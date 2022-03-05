import { Data } from "../Inputs/FormButtonsVertcal";
import AnimalsIcon from "../../style/svgs/animals.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import PregnancyIcon from "../../style/svgs/pregnancy.svg";
import CarIcon from "../../style/svgs/car.svg";
import ElderSittingIcon from "../../style/svgs/elder_sitting.svg";
import { AccommodationType } from "../../helpers/FormTypes";

export const hostCountries = [
  { label: "hostAdd.countries.poland", value: "poland" },
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

export const additionalHostsFeats: Data[] = [
  {
    id: "advancedHost.transportReady",
    label: "hostAdd.transportReady",
    icon: <CarIcon width="30" height="30" />,
  },
  {
    id: "advancedHost.pregnantReady",
    label: "hostAdd.pregnantReady",
    icon: <PregnancyIcon width="30" height="30" />,
  },
  {
    id: "advancedHost.elderReady",
    label: "hostAdd.elderReady",
    icon: <ElderSittingIcon width="30" height="30" />,
  },
  {
    id: "advancedHost.dissabilityReady",
    label: "hostAdd.dissabilityReady",
    icon: <DisabilityIcon width="30" height="30" />,
  },
  {
    id: "advancedHost.animalReady",
    label: "hostAdd.animalReady",
    icon: <AnimalsIcon width="30" height="30" />,
  },
];

// todo: make sure values are consistent with API
export const accomodationTypeDropdownFields = [
  {
    label: "advancedHost.accommodationTypeOptions.bed",
    value: AccommodationType.BED,
  },
  {
    label: "advancedHost.accommodationTypeOptions.room",
    value: AccommodationType.ROOM,
  },
  {
    label: "advancedHost.accommodationTypeOptions.flat",
    value: AccommodationType.FLAT,
  },
  {
    label: "advancedHost.accommodationTypeOptions.house",
    value: AccommodationType.HOUSE,
  },
  {
    label: "advancedHost.accommodationTypeOptions.collective",
    value: AccommodationType.COLLECTIVE,
  },
];
