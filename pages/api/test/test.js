import { decodeToken } from "../../../lib/firebase-admin";

export default async function testToken(req, res) {
  const body = JSON.parse(req.body);

  const decodedToken = await decodeToken(body.token);
  if (!decodedToken) {
    res.status(400).json({ ok: "not ok" });
    res.end();
    return;
  }

  res.status(200).json({ ok: "ok", uid: decodedToken.uid });
  res.end();
}
