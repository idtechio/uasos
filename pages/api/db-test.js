import { select } from "../../lib/db";

export default async function dbTest(req, res) {
  try {
    const result = await select("SELECT count(*) FROM hosts");
    // const result2 = await select("SELECT * FROM hosts LIMIT 10");

    res.status(200).json({
      result,
      // result2,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
  res.end();
}
