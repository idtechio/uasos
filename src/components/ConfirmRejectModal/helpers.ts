import { Status, ResultItem, AlreadyShowed } from "./types";

export const filterByAlreadyShowed = (
  alreadyShowed: AlreadyShowed,
  result: ResultItem[]
) => {
  return result.filter(({ id }) => !alreadyShowed[id]);
};

export const filterByStatus = (status: Status, arrayToFilter: ResultItem[]) => {
  return arrayToFilter.filter(
    (item: ResultItem) => item?.match_status === status
  );
};

export const prepareToStorage = (
  alreadyShowed: AlreadyShowed,
  result: ResultItem[]
) => {
  result.forEach((item) => {
    alreadyShowed = {
      ...alreadyShowed,
      [item.id]: true,
    };
  });

  return JSON.stringify(alreadyShowed);
};
