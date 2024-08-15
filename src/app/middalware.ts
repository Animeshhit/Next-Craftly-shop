// middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const userAgent: string | null = request.headers.get("user-agent");
  let deviceType = "desktop";

  if (/mobile/i.test(userAgent as string)) {
    deviceType = "mobile";
  } else if (/tablet|ipad|playbook|silk/i.test(userAgent as string)) {
    deviceType = "tablet";
  }

  let response = NextResponse.next();

  return response.cookies.set("device-type", deviceType);
}
