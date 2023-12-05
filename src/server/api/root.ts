import { createTRPCRouter } from "~/server/api/trpc";
import { waitlistRouter } from "~/server/api/routers/waitlist";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  waitlist: waitlistRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
