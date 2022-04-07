import { GuestProps } from "../../pages/api/guests/edit";
import { getFirebaseToken } from "./getFirebaseToken";

export default async function updateGuestToApi(guest: GuestProps) {
  const token = await getFirebaseToken();
  return fetch(process.env.NEXT_PUBLIC_DOMAIN + "api/guests/edit", {
    method: "post",
    body: JSON.stringify(guest),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(function (res) {
    if (res.status === 200) {
      return true;
    }
    throw new Error("Couldn't add guest to api");
  });
}
