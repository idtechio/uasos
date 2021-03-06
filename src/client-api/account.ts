import { getFirebaseToken } from "../helpers/getFirebaseToken";

export interface getAccountDTO {
  uid: string;
  name: string;
  preferredLang?: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
  smsNotification: Boolean;
  verified?: Boolean;
}
export interface updateAccountReqDTO {
  name: string;
  preferredLang: string;
}
interface AccountApi {
  getAccount: () => Promise<getAccountDTO>;
  updateAccount: (options: { payload: object }) => Promise<void>;
}
export const AccountApi: AccountApi = {
  getAccount: async function () {
    const token = await getFirebaseToken();
    if (token) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_DOMAIN + `api/account/get`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return (await res.json()).account;
    }
  },
  updateAccount: async function ({ payload }) {
    const token = await getFirebaseToken();
    await fetch(process.env.NEXT_PUBLIC_DOMAIN + "api/account/update", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  },
};
