import { getFirebaseToken } from "../helpers/getFirebaseToken";

export interface OnboardingDataInterface {
  uid: string;
  url: string;
  shortenedLink: string;
  expirationDate: string;
}

export const idGetOnboarding = async () => {
  const token = await getFirebaseToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}api/account/idcheck`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) {
    throw new Error("Couldn't fetch onboarding data, try again later.");
  }

  const body: OnboardingDataInterface = await res.json();

  return body;
};
