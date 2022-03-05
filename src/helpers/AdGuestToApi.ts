import type { GuestProps } from "../../pages/api/guests/add";

export default function AdGuestToApi(guest: GuestProps) {
  fetch("/api/guests/add", {
    method: "post",
    body: JSON.stringify(guest),
  }).then(function (res) {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}
