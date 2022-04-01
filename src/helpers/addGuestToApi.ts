import type { GuestProps } from "../../pages/api/guests/add";
import { getFirebaseToken } from "./getFirebaseToken";

export default async function addGuestToApi(guest: GuestProps) {
  const token = await getFirebaseToken();

  return fetch(`${process.env.NEXT_PUBLIC_DOMAIN}api/guests/add`, {
    method: "post",
    body: JSON.stringify(guest),
    headers: { Authorization: `Bearer ${token}` },
  }).then(function (res) {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}
