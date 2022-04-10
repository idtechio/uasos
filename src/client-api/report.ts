import { getFirebaseToken } from "../helpers/getFirebaseToken";

export type ReportListItemDTO = {
  matchID: string;
  targetID: string;
  targetType: "guests" | "hosts";
  reportType: string;
};

export const reportListItem = async ({
  matchID,
  targetType,
  targetID,
  reportType,
}: ReportListItemDTO) => {
  const token = await getFirebaseToken();

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DOMAIN}api/listing/report`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        match_id: matchID,
        ...(targetType == "hosts" && { host_id: targetID }),
        ...(targetType == "guests" && { guest_id: targetID }),
        report_type: reportType,
      }),
    }
  );

  if (res.status != 200) {
    throw new Error("Couldn't report item.");
  }

  return await res.json();
};
