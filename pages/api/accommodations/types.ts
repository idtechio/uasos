export type PubSubHostProps = {
  name: string;
  location: string;
  status: "available" | "tenntalive" | "matched";
  consent_to_the_child: boolean;
  floor: boolean;
  consent_to_the_pet: boolean;
  lift: boolean;
  consent_to_the_disability: boolean;
  number_of_people: number;
  maximum_duration_of_stay: number;
};

export type PubSubGuestProps = {
  name: string;
  status: "available" | "tenntalive" | "matched";
  location: string;
};
