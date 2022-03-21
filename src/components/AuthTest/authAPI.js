const AuthAPI = {
  testToken: async function (token) {
    await fetch(`/api/auth-test/test-token`, {
      method: "post",
      body: JSON.stringify({ token }),
    });
  },
  getAccount: async function (token) {
    const res = await fetch(`/api/auth-test/get-account`, {
      method: "post",
      body: JSON.stringify({ token }),
    });

    return (await res.json()).account;
  },
  updateAccount: async function (token, accountData) {
    await fetch(`/api/auth-test/update`, {
      method: "post",
      body: JSON.stringify({
        token,
        ...accountData,
      }),
    });
  },
  verifyEmail: async function (token) {
    await fetch(`/api/auth-test/verify-email`, {
      method: "post",
      body: JSON.stringify({
        token,
      }),
    });
  },
};

export default AuthAPI;
