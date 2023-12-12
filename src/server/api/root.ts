import { createTRPCRouter } from "~/server/api/trpc";
import { waitlistRouter } from "~/server/api/routers/waitlist";
import { userRouter } from "~/server/api/routers/user";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  waitlist: waitlistRouter,
  user: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
