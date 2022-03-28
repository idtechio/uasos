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
  updateAccount: (data: updateAccountReqDTO, token: string) => Promise<any>;
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
  updateAccount: async function (data, token) {
    const res = await fetch(`/api/account/update`, {
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  },
};
