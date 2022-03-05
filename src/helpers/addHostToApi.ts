import type { GuestProps } from "../../pages/api/guests/add";
import { HostProps } from "../../pages/api/hosts/add";

export default function addHostToApi(host: HostProps) {
  fetch("/api/hosts/add", {
    method: "post",
    body: JSON.stringify(host),
  }).then(function (res) {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}
