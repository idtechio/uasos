import { decodeToken, getAuthObj } from "../../../lib/firebase-admin";

export default async function addPhone(req, res) {
  const body = JSON.parse(req.body);

  const decodedToken = await decodeToken(body.token);

  if (!decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  const auth = await getAuthObj();

  try {
    await auth.updateUser(decodedToken.uid, {
      phoneNumber: body.phone,
    });
  } catch (error) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }
  // TODO update account details in backend / cloud functions

  res.status(200).json({ ok: "ok" });
  res.end();
}
