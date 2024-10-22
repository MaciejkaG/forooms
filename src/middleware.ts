import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales: string[] = ['en', 'pl'];
const defaultLocale = 'en';

// Get the preferred locale, similar to the above or using a library
function getLocale(request: Request): string {
    // Convert Headers to a plain object
    const headers: Record<string, string> = {};
    request.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const languages = new Negotiator({ headers }).languages();

    return match(languages, locales, defaultLocale);
}

export function middleware(request: Request) {
    // Check if there is any supported locale in the pathname
    const { pathname } = new URL(request.url);
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    const nextUrl = new URL(request.url);
    nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
};