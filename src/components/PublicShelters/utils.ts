interface ShelterInfo {
  name: string;
  address: string;
  city: string;
  occupancy: string;
  phoneNumber: string;
  howToGetThere: string;
  country: string;
}

export const getFilteredArray = (
  array: Array<ShelterInfo>,
  filters: { city: string; country: string }
) => {
  const isCountryAvailable = filters.country;
  const isCityAvailable = filters.city;

  if (isCountryAvailable) {
    return array.filter((item) => {
      const isCountryMatch = item.country === filters.country;
      const isCityMatch = isCityAvailable ? item.city === filters.city : true;

      return isCountryMatch && isCityMatch;
    });
  }

  return array;
};
