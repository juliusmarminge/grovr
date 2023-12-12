import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const userRouter = createTRPCRouter({
  createUserData: protectedProcedure
    .input(
      z.object({
        userType: z.enum(["TESTER", "COMPANY"]),
      }),
    )
    .mutation(({ ctx, input }) => {
      if(!ctx.auth.user) {
        throw new TRPCError(
          { code: "UNAUTHORIZED", message: "User is not logged in" },
        );
      }
      return ctx.db.userData.create({
        data: {
          userType: input.userType,
          clerkUserId: ctx.auth.user.id,
          avatarURL: ctx.auth.user.imageUrl
        },
      });
    }),
  getUserData: protectedProcedure.query(({ ctx }) => {
    return ctx.db.userData.findUnique({
      where: {
        clerkUserId: ctx.auth.user?.id,
      },
    });
  }),
});
