import { getFirebaseToken } from "../helpers/getFirebaseToken";

export type DeleteListItemDTO = {
  targetID: string;
  targetType: "guests" | "hosts";
};

export const renewListItem = async ({
  targetID,
  targetType,
}: DeleteListItemDTO) => {
  const token = await getFirebaseToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}api/${targetType}/renew`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({ id: targetID }),
    }
  );

  if (res.status != 200) {
    throw new Error("Couldn't delete item.");
  }

  return await res.json();
};
