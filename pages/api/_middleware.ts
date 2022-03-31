import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import Cors from "cors";

export default function initMiddleware(middleware: any) {
  return (req: unknown, res: unknown) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result: unknown) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

const cors = initMiddleware(
  Cors({
    origin: "*",
  })
);

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // eslint-disable-next-line no-console
  console.log("middleware start");

  if (process.env.ENV_NAME === "test") {
    await cors(req, res);
    // res.headers.set("Access-Control-Allow-Credentials", "true");
    // res.headers.set("Access-Control-Allow-Origin", "*");
    // res.headers.set(
    //   "Access-Control-Allow-Methods",
    //   "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    // );

    // eslint-disable-next-line no-console
    console.log("middleware header added");
  }
  return res;
}
