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

type PeopleDetails = {
  animals: boolean;
  toddler: boolean;
  oldPerson: boolean;
  disability: boolean;
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
