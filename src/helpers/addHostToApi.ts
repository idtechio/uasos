import { HostProps } from "../../pages/api/hosts/add";
import { getFirebaseToken } from "./getFirebaseToken";

export default async function addHostToApi(host: HostProps) {
  const token = await getFirebaseToken();
  return fetch(process.env.NEXT_PUBLIC_DOMAIN + "/api/hosts/add", {
    method: "post",
    body: JSON.stringify(host),
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(function (res) {
    if (res.status === 200) {
      return true;
    }
    return false;
  });
}
