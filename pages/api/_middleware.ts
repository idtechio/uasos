import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  if (process.env.ENV_NAME === "test") {
    res.headers.set("Access-Control-Allow-Origin", "*");
  }
  return res;
}
