type PeopleDetails = {
  animals: boolean;
  toddler: boolean;
  oldPerson: boolean;
  disability: boolean;
};

export type FormType = {
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
      people: string[];
    };
    isGDPRAccepted: boolean;
  };
};
