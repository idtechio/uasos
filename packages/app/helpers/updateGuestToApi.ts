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
  id: string,
  "country?": string,
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
