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

const HostPropsType = object({
  country: string,
  "name?": string,
  "phone_num?": string,
  "email?": string,
  closest_city: string,
  city: string,
  zipcode: string,
  street: string,
  building_no: string,
  appartment_no: string,
  shelter_type: arrayOf(string),
  host_type: arrayOf(string),
  beds: number,
  acceptable_group_relations: arrayOf(string),
  ok_for_pregnant: trueOrFalse,
  ok_for_disabilities: trueOrFalse,
  ok_for_animals: trueOrFalse,
  ok_for_elderly: trueOrFalse,
  ok_for_any_nationality: trueOrFalse,
  duration_category: arrayOf(string),
  transport_included: trueOrFalse,
  can_be_verified: trueOrFalse,
});

export type HostProps = Infer<typeof HostPropsType>;

export default async function addHostToApi(host: HostProps) {
  const token = await getFirebaseToken();
  return fetch(process.env.NEXT_PUBLIC_DOMAIN + "api/hosts/add", {
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
    throw new Error("Couldn't add host to api");
  });
}
