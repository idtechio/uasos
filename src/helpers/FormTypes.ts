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
};

type PathsToStringProps<T> = T extends string | number | Date | boolean
  ? []
  : {
      [K in Extract<keyof T, any>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, any>];

type JoinTuple<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${JoinTuple<Extract<R, string[]>, D>}`
    : never
  : string;

export type FormKey = JoinTuple<PathsToStringProps<FormType>, ".">;
