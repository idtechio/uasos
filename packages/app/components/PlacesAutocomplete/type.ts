export enum CountryCode {
  poland = "pl",
  hungary = "hu",
  czechia = "cz",
  slovakia = "sk",
}

export type SelectedCountry = keyof typeof CountryCode;
