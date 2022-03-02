export enum ForHowLong {
  WEEK = "week",
  TWO_WEEKS = "two_weeks",
  MONTH = "month",
  LONGER = "longer",
}

export enum LivingConditions {
  FLAT = "flat",
  ROOM = "room",
  MATTRESS = "mattress",
  OTHER = "other",
}

type PeopleDetails = {
  animals: boolean;
  toddler: boolean;
  oldPerson: boolean;
  disability: boolean;
  pregnant?: boolean;
};

export enum Nationality {
  UKRAINIAN = "ukrainian",
  ANY = "any",
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
      peopleQuantity: number | string;
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
    fullBedCount: number;
    childBedCount: number;
    accommodationTime: number;
    nationality: Nationality;
    groupsTypes: string;
    transportReady: boolean;
    pregnantReady: boolean;
    dissabilityReady: boolean;
    animalReady: boolean;
    prolongationReady: boolean;
  };
  advancedRefugee: {
    name: string;
    email: string;
    country: string;
    cityOfRefuge: string;
    fullBedCount: number;
    childBedCount: number;
    sex: string;
    age: number;
    nationality: string;
    groupRelations: string;
    accommodationType: string;
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
