import { RequestProps } from "../../pages/api/listing/requests";
import { getFirebaseToken } from "../helpers/getFirebaseToken";

export type GetRequestsListDTO = {
  ok: "ok";
  requests: RequestProps[];
};

export const getRequestsList = async () => {
  const token = await getFirebaseToken();
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}/api/listing/requests`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (res.status != 200) {
    throw new Error("Couln't fetch requests list, try again later.");
  }

  const body = (await res.json()) as GetRequestsListDTO;

  return body;
};
