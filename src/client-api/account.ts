import { getFirebaseToken } from "../helpers/getFirebaseToken";

export interface getAccountDTO {
  uid: string;
  name: string;
  prefferedLang?: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
  verified?: Boolean;
}
export interface updateAccountReqDTO {
  name: string;
  prefferedLang: string;
}
interface AccountApi {
  getAccount: () => Promise<getAccountDTO>;
  updateAccount: (options: { payload: object }) => Promise<any>;
}
export const AccountApi: AccountApi = {
  getAccount: async function () {
    const token = await getFirebaseToken();
    const res = await fetch(
      process.env.NEXT_PUBLIC_DOMAIN + `/api/account/get`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return (await res.json()).account;
  },
  updateAccount: async function ({ payload }) {
    const token = await getFirebaseToken();
    const res = await fetch(
      process.env.NEXT_PUBLIC_DOMAIN + "/api/account/update",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    return await res.json();
  },
};
