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

export enum AccommodationTime {
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
    name: string;
    email: string;
    phonePrefix: string;
    phoneNumber: string;
    country: string;
    accommodationType: string;
    guestCount: number;
    childBedCount: number;
    accommodationTime: AccommodationTime | string;
    nationality: Nationality | string;
    groupsTypes: string[];
    transportReady: boolean;
    pregnantReady: boolean;
    disabilityReady: boolean;
    animalReady: boolean;
    prolongationReady: boolean;
    accommodationPhotos: [Blob];
    hostType: HostType | string;
    volunteerVisitAcceptance: boolean;
    elderReady: boolean;
    zipCode: string;
    city: string;
    closestLargeCity: string;
    street: string;
    buildingNumber: string;
    apartmentNumber: string | undefined;
    uploadedPhotos: Array<string>;
  };
  advancedRefugee: {
    town: string;
    country: string;
    name: string;
    email: string;
    cityOfRefuge: string;
    fullBedCount: number;
    childBedCount: number;
    phonePrefix: string;
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
    accommodationType: string[];
  };
  login: {
    email: string;
    password: string;
    phoneOrEmail: string;
  };
  registerWithSocials: {
    email: string;
    name: string;
    language: string;
    phonePrefix: string;
    phoneNumber: string;
    preferredLanguage: string;
    smsNotification: boolean;
  };
  resetPassword: {
    password: string;
    passwordRepeat: string;
  };
  registrationUserForm: {
    name: string;
    preferredLanguage: string;
    phonePrefix: string;
    phoneNumber: string;
    smsNotification: boolean;
    email: string;
    password: string;
    passwordConfirm: string;
    showPassword: boolean;
  };
};

type PathsToStringProps<T> = T extends
  | string
  | number
  | Date
  | boolean
  | string[]
  ? []
  : {
      [K in Extract<keyof T, unknown>]: [K, ...PathsToStringProps<T[K]>];
    }[Extract<keyof T, unknown>];

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
