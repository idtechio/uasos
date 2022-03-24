export interface getAccountDTO {
  uid: string;
  name: string;
  prefferedLang?: string;
  confirmedEmail: Boolean;
  confirmedPhone: Boolean;
  verified?: Boolean;
}
interface AccountApi {
  getAccount: (token: string) => Promise<getAccountDTO>;
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
};
