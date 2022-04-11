const keys = {
  WAITING: "idCheckWaiting",
  SHOWN: "idCheckShown",
};

export const setIsWaitingVerification = () => {
  localStorage.setItem(
    keys.WAITING,
    JSON.stringify({ isWaitingVerification: true })
  );
};

export const getIsWaitingVerification = () => {
  const json = localStorage.getItem(keys.WAITING);

  const { isWaitingVerification }: { isWaitingVerification: boolean } = json
    ? JSON.parse(json)
    : {};

  return isWaitingVerification;
};

export const removeIsWaitingVerification = () => {
  localStorage.removeItem(keys.WAITING);
};

export const setIsSuccessToastShown = () => {
  localStorage.setItem(
    keys.SHOWN,
    JSON.stringify({ isSuccessToastShown: true })
  );
};

export const getIsSuccessToastShown = () => {
  const json = localStorage.getItem(keys.SHOWN);

  const { isSuccessToastShown }: { isSuccessToastShown: boolean } = json
    ? JSON.parse(json)
    : {};

  return isSuccessToastShown;
};
