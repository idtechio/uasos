import { decodeToken } from "../../../lib/firebase-admin";

export default async function getAccount(req, res) {
  if (!req.headers["id-token"]) {
    res.status(401).json({ ok: "not ok" });
    res.end();
    return;
  }

  const decodedToken = await decodeToken(req.headers["id-token"]);
  if (!decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  // TODO get account details from backend using SQL

  const account = {
    uid: decodeToken.uid,
    name: "",
    prefferedLang: "",
    confirmedEmail: false,
    confirmedPhone: false,
  };
  account.verified =
    !!account.uid &&
    !!account.name &&
    account.confirmedEmail &&
    account.confirmedPhone;

  res.status(200).json({ ok: "ok", account });
  res.end();
}
