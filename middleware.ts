import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// export default clerkMiddleware();

const isProtectedRoute = createRouteMatcher(["/workouts(.*)"]);

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Don't run middleware on static files
    "/", // Run middleware on index page
    "/(api|trpc)(.*)",
  ], // Run middleware on API routes
};
