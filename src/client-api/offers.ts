import { OfferProps } from "../../pages/api/listing/offers";
import { getFirebaseToken } from "../helpers/getFirebaseToken";
export type GetOffersListDTO = {
  ok: "ok";
  offers: OfferProps[];
};

export const getOffersList = async () => {
  const token = await getFirebaseToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/listing/offers`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (res.status != 200) {
    throw new Error("Couln't fetch offers list, try again later.");
  }

  const body = (await res.json()) as GetOffersListDTO;

  return body;
};
