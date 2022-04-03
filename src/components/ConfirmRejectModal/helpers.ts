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

export const prepareToStorage = (result: ResultItem[]) => {
  let alreadyShown = {};

  result.forEach((item) => {
    alreadyShown = {
      ...alreadyShown,
      [item.id]: true,
    };
  });

  return JSON.stringify(alreadyShown);
};
