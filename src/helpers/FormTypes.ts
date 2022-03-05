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
    accomodationPhoto: Blob;
  };
  advancedRefugee: {
    name: string;
    email: string;
    country: string;
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
    overnightDuration: string;
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
