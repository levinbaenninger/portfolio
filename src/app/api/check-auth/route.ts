import { parse } from "cookie";
import { type NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const cookieHeader = request.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);

  if (cookies.authToken === "authenticated") {
    return NextResponse.json({ authenticated: true }, { status: 200 });
  }
  return NextResponse.json({ authenticated: false }, { status: 401 });
}
