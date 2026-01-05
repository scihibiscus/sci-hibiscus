// import { i18nRouter } from 'next-i18n-router';
// import { i18nConfig } from './i18nConfig';

// export function middleware(request: any) {
//   return i18nRouter(request, i18nConfig);
// }

// // applies this middleware only to files in the app directory
// export const config = {
//   matcher: [
//     // Enable a redirect to a matching locale at the root
//     '/',

//     // Set a cookie to remember the previous locale for
//     // all requests that have a locale prefix
//     '/(fr|en)/:path*',

//     // Enable redirects that add missing locales
//     // (e.g. `/pathnames` -> `/en/pathnames`)
//     '/((?!_next|_vercel|.*\\..*).*)',

//     '/((?!api|static|.*\\..*|_next).*)'
//   ]
// };
import { i18nRouter } from 'next-i18n-router';
import i18nConfig from './i18nConfig';import { i18nConfig } from './i18nConfig';
// name this function 'middleware' instead in Next 15 or earlier
export function proxy(request) {
  return i18nRouter(request, i18nConfig);
}

// runs this function only on requests to pages in our app directory
export const config = {
  matcher: '/((?!api|static|.*\\..*|_next).*)'
};