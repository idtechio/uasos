import type { GuestProps } from "../../pages/api/guests/add";

export default async function addGuestToApi(guest: GuestProps) {
  return fetch("/api/guests/add", {
    method: "post",
    body: JSON.stringify(guest),
  }).then(function (res) {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}
