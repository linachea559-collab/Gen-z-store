import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Only the account page requires being signed in — everything else
// (browsing, cart, checkout) stays open, like a normal store.
const isProtectedRoute = createRouteMatcher(["/account(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) {
    auth().protect();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)", "/", "/(api|trpc)(.*)"],
};
