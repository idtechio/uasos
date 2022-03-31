import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // eslint-disable-next-line no-console
  console.log("middleware start");

  if (process.env.ENV_NAME === "test") {
    res.headers.set("Access-Control-Allow-Credentials", "true");
    res.headers.set("Access-Control-Allow-Origin", "*");
    res.headers.set(
      "Access-Control-Allow-Methods",
      "GET,OPTIONS,PATCH,DELETE,POST,PUT"
    );

    // eslint-disable-next-line no-console
    console.log("middleware header added");
  }
  return res;
}
