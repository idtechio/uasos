import { Pool } from "pg";
import util from "util";

const DEBUG = false;
const logger = console;

const pool = new Pool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
});

const select = async function (text: string, params?: Array<unknown>) {
  try {
    DEBUG && logger.debug(text);

    const result = await pool.query(text, params);

    if (result.rows && result.rows.length) {
      return result.rows;
    }
    return false;
  } catch (error) {
    const errorMsg = util.format(
      "DB select %s (%s) query: %s %s",
      error instanceof Error ? error.name : "",
      error instanceof Error ? error.message : "",
      text,
      params
    );
    logger.error(errorMsg);
    throw errorMsg;
  }
};

const selectColumn = async function (
  column: string,
  text: string,
  params?: Array<unknown>
) {
  try {
    DEBUG && logger.debug(text);

    const result = await pool.query(text, params);
    if (result.rows && result.rows.length) {
      return result.rows.map((e) => e[column]);
    }
    return false;
  } catch (error) {
    const errorMsg = util.format(
      "DB selectColumn %s (%s) query: %s %s",
      error instanceof Error ? error.name : "",
      error instanceof Error ? error.message : "",
      text,
      params
    );
    logger.error(errorMsg);
    throw errorMsg;
  }
};

const selectOne = async function (text: string, params?: Array<unknown>) {
  try {
    DEBUG && logger.debug(text);

    const result = await pool.query(text, params);
    if (result.rows && result.rows.length) {
      return result.rows[0];
    }
    return false;
  } catch (error) {
    const errorMsg = util.format(
      "DB selectOne %s (%s) query: %s %s",
      error instanceof Error ? error.name : "",
      error instanceof Error ? error.message : "",
      text,
      params
    );
    logger.error(errorMsg);
    throw errorMsg;
  }
};

const query = async function (text: string, params?: Array<unknown>) {
  try {
    DEBUG && logger.debug(text);

    return await pool.query(text, params);
  } catch (error) {
    const errorMsg = util.format(
      "DB query %s (%s) query: %s %s",
      error instanceof Error ? error.name : "",
      error instanceof Error ? error.message : "",
      text,
      params
    );
    logger.error(errorMsg);
    throw errorMsg;
  }
};

const insert = async function (
  table: string,
  cols: Array<string>,
  values: Array<string>
) {
  let text;
  try {
    text = `INSERT INTO "${table}" (${cols.join(", ")})
      VALUES (${cols.map((_el, i) => "$" + (i + 1)).join(", ")})
      RETURNING *`;
    DEBUG && logger.debug(text);

    const result = await pool.query(text, values);
    if (result.rows && result.rows[0]) {
      return result.rows[0];
    }
    return false;
  } catch (error) {
    const errorMsg = util.format(
      "DB insert %s (%s) query: %s",
      error instanceof Error ? error.name : "",
      error instanceof Error ? error.message : "",
      text
    );
    logger.error(errorMsg);
    throw new Error(errorMsg);
  }
};

const connect = pool.connect;
const end = pool.end;

export { select, selectColumn, selectOne, query, insert, connect, end };
