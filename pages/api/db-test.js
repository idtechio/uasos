import { Pool } from "pg";

export default async function dbTest(req, res) {
  try {
    const pool = new Pool({
      database: "postgres",
      user: "postgres",
      password: "postgres",
      host: "/cloudsql/ukrn-hlpr-test:europe-central2:sql-ukr-helper-test-iter-011",
      // port: 5432,
      // ssl: true,
    });

    const result = await pool.query("SELECT count(*) FROM hosts");
    const result2 = await pool.query("SELECT * FROM hosts LIMIT 10");

    res.status(200).json({
      result,
      result2,
    });
  } catch (error) {
    res.status(400).json({ error });
  }
  res.end();
}
