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
  getAccount: (token: string) => Promise<getAccountDTO>;
  updateAccount: (options: { payload: object; token: string }) => Promise<any>;
}
export const AccountApi: AccountApi = {
  getAccount: async function (token) {
    const res = await fetch(`/api/account/get`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return (await res.json()).account;
  },
  updateAccount: async function ({ token, payload }) {
    const res = await fetch("/api/account/update", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await res.json();
  },
};
