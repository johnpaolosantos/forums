import { createNeonAuth } from "@neondatabase/auth/next/server";
import { cache } from "react";
import { User } from "./types";
import { ensureUserProfile } from "./db/user-profile";
const baseUrl = process.env.NEON_AUTH_BASE_URL;
const cookieSecret = process.env.NEON_AUTH_COOKIE_SECRET;

if (!baseUrl) {
  throw new Error("NEON_AUTH_BASE_URL is missing");
}

if (!cookieSecret) {
  throw new Error("NEON_AUTH_COOKIE_SECRET is missing");
}
export const auth = createNeonAuth({
    baseUrl: baseUrl,
    cookies: {
        secret: cookieSecret
    },
});
export const getCurrentUserId = cache(async (): Promise<string | undefined> => {
    const { data: session } = await auth.getSession();
    return session?.user.id;
});

export const getSessionUser = cache(async (): Promise<User | undefined> => {
    const { data: session } = await auth.getSession();
    if (!session?.user) return null;
    return ensureUserProfile(session.user);
});
