export enum ForHowLong {
  WEEK = 1,
  TWO_WEEKS = 2,
  MONTH = 4,
  LONGER = 999,
}

export enum LivingConditions {
  FLAT = "flat",
  ROOM = "room",
  MATTRESS = "mattress",
  OTHER = "other",
}

export enum Nationality {
  UKRAINIAN = "ukrainian",
  ANY = "any",
}

type PeopleDetails = {
  animals: boolean;
  toddler: boolean;
  oldPerson: boolean;
  disability: boolean;
  pregnant?: boolean;
};

export enum HostType {
  MALE = "host_type_men",
  WOMEN = "host_type_women",
  COUPLE = "host_type_couple",
  FAMILY = "host_type_family",
  ELDER = "host_type_elder_people",
  FRIENDS = "host_type_friends_group",
}

export enum AccomodationTime {
  LESS_THAN_WEEK = "less_than_week",
  WEEK = "week",
  TWO_WEEKS = "two_weeks",
  MONTH = "month",
  LONGER = "longer",
}

export enum AccommodationType {
  ROOM = "room",
  BED = "bed",
  FLAT = "flat",
  HOUSE = "house",
  COLLECTIVE = "collective",
}

export type FormType = {
  host: {
    core: {
      name: string;
      email: string;
      phoneNumber: string;
      location: string;
    };
    preferences: {
      animals: boolean;
      kids: boolean;
      food: boolean;
      disability: boolean;
      peopleQuantity: number;
      forHowLong: ForHowLong;
    };
    livingConditions: LivingConditions;
    floor: number;
    elevator: boolean;
  };
  refugee: {
    core: {
      name: string;
      email: string;
      phoneNumber: string;
      location: string;
    };
    preferences: {
      peopleQuantity: string;
      animal: string;
      peopleDetails: PeopleDetails;
      forHowLong: ForHowLong;
      people: {
        [name: string]: string;
      };
    };
    isGDPRAccepted: boolean;
  };
  advancedHost: {
    town: string;
    country: string;
    accommodationType: string;
    guestCount: number;
    childBedCount: number;
    accommodationTime: AccomodationTime;
    nationality: Nationality;
    groupsTypes: string;
    transportReady: boolean;
    pregnantReady: boolean;
    dissabilityReady: boolean;
    animalReady: boolean;
    prolongationReady: boolean;
    accomodationPhotos: [Blob];
    hostType: HostType;
    volunteerVisitAcceptance: string;
    elderReady: string;
  };
  advancedRefugee: {
    town: string;
    country: string;
    name: string;
    email: string;
    cityOfRefuge: string;
    fullBedCount: number;
    childBedCount: number;
    phoneNumber: string;
    preferences: {
      animal: string;
      peopleDetails: PeopleDetails;
    };
    gender: string;
    age: number;
    nationality: string;
    overnightDuration: number;
    groupRelations: string;
    accommodationType: string;
  };
  login: {
    email: string;
    password: string;
  };
};

type PathsToStringProps<T> = T extends string | number | Date | boolean
  ? []
  : {
      [K in Extract<keyof T, any>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, any>];

type JoinTuple<T extends (string | number)[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${JoinTuple<Extract<R, string[]>, D>}`
    : never
  : string;

export type FormKey = JoinTuple<PathsToStringProps<FormType>, ".">;
