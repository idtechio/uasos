import AnimalsIcon from "../../style/svgs/animals.svg";
import DisabilityIcon from "../../style/svgs/disability.svg";
import PregnancyIcon from "../../style/svgs/pregnancy.svg";
import CarIcon from "../../style/svgs/car.svg";
import ElderSittingIcon from "../../style/svgs/elder_sitting.svg";
import { AccommodationTypeEnum } from "../../helpers/FormTypes";
import { ReactNode } from "react";

type GroupRelationsLabelType =
  | "single_man"
  | "single_woman"
  | "spouses"
  | "mother_with_children"
  | "family_with_children"
  | "unrelated_group";

type GroupRelationsLabel =
  `staticValues.groupRelations.${GroupRelationsLabelType}`;

interface GroupRelationsTypes {
  label: GroupRelationsLabel;
  value: string;
}

export const GROUP_RELATIONS: Array<GroupRelationsTypes> = [
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

type AdditionalHostsFeatType =
  | "transportReady"
  | "pregnantReady"
  | "elderReady"
  | "dissabilityReady"
  | "animalReady";

export type AdditionalHostsFeatsLabel = `hostAdd.${AdditionalHostsFeatType}`;

interface AdditionalHostsFeats {
  label: AdditionalHostsFeatsLabel | string;
  id: FormKey;
  icon: ReactNode;
}

export const additionalHostsFeats: Array<AdditionalHostsFeats> = [
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
    id: "advancedHost.disabilityReady",
    label: "hostAdd.dissabilityReady",
    icon: <DisabilityIcon width="30" height="30" />,
  },
  {
    id: "advancedHost.animalReady",
    label: "hostAdd.animalReady",
    icon: <AnimalsIcon width="30" height="30" />,
  },
];

type AccommodationType = "bed" | "room" | "flat" | "house" | "collective";

type AccommodationLabel =
  `staticValues.accommodationTypes.${AccommodationType}`;

interface AccommodationTypeDropdownFields {
  label: AccommodationLabel;
  value: string;
}

// todo: make sure values are consistent with API
export const accomodationTypeDropdownFields: Array<AccommodationTypeDropdownFields> =
  [
    {
      label: "staticValues.accommodationTypes.bed",
      value: AccommodationTypeEnum.BED,
    },
    {
      label: "staticValues.accommodationTypes.room",
      value: AccommodationTypeEnum.ROOM,
    },
    {
      label: "staticValues.accommodationTypes.flat",
      value: AccommodationTypeEnum.FLAT,
    },
    {
      label: "staticValues.accommodationTypes.house",
      value: AccommodationTypeEnum.HOUSE,
    },
    {
      label: "staticValues.accommodationTypes.collective",
      value: AccommodationTypeEnum.COLLECTIVE,
    },
  ];

type HostLabelType =
  | "host_type_men"
  | "host_type_women"
  | "host_type_couple"
  | "host_type_family"
  | "host_type_elder_people"
  | "host_type_friends_group";

type HostLabel = `hostAdd.hostTypeLabel.${HostLabelType}`;

interface HostTypeData {
  label: HostLabel;
  value: string;
}

export const hostType: Array<HostTypeData> = [
  { label: "hostAdd.hostTypeLabel.host_type_men", value: "host_type_men" },
  { label: "hostAdd.hostTypeLabel.host_type_women", value: "host_type_women" },
  {
    label: "hostAdd.hostTypeLabel.host_type_couple",
    value: "host_type_couple",
  },
  {
    label: "hostAdd.hostTypeLabel.host_type_family",
    value: "host_type_family",
  },
  {
    label: "hostAdd.hostTypeLabel.host_type_elder_people",
    value: "host_type_elder_people",
  },
  {
    label: "hostAdd.hostTypeLabel.host_type_friends_group",
    value: "host_type_friends_group",
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
