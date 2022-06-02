<<<<<<< HEAD
import {
  object,
  string,
  number,
  arrayOf,
  match,
  Infer,
} from "@gucciogucci/contented";
import { getFirebaseToken } from "./getFirebaseToken";

const trueOrFalse = match("TRUE").or(match("FALSE"));

const GuestPropsType = object({
  "country?": string,
  "name?": string,
  "phone_num?": string,
  "email?": string,
  "city?": string,
  acceptable_shelter_types: arrayOf(string),
  beds: number,
  group_relation: arrayOf(string),
  is_pregnant: trueOrFalse,
  is_with_disability: trueOrFalse,
  is_with_animal: trueOrFalse,
  is_with_elderly: trueOrFalse,
  is_ukrainian_nationality: trueOrFalse,
  duration_category: arrayOf(string),
});

export type GuestProps = Infer<typeof GuestPropsType>;

=======
import type { GuestProps } from "../../pages/api/guests/add";
import { getFirebaseToken } from "./getFirebaseToken";

>>>>>>> 1e3e88039 (Refactored GoBack component)
export default async function addGuestToApi(guest: GuestProps) {
  const token = await getFirebaseToken();
  return fetch(process.env.NEXT_PUBLIC_DOMAIN + "api/guests/add", {
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
    return false;
  });
}
