import { z } from "zod";

import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { resend } from "~/resend";
import WaitlistEmail from "~/resend/email-templates/waitlist";

export const waitlistRouter = createTRPCRouter({
  addToWaitlist: publicProcedure
  .input(
    z.object({
      name: z.string().min(1),
      email: z.string().email().min(1),
      userType: z.enum(["TESTER", "COMPANY"]),
    }),
  )
  .mutation(async ({ ctx, input }) => {
    try {
      const response = await ctx.db.waitlistData.create({ data: input });

      if (response.id) {
        await resend.emails.send({
          from: "GroVr <waitlist@email.grovrtesting.com>",
          to: input.email,
          subject:
            input.userType === "TESTER"
              ? `Welcome to GroVr's Tester Community Waitlist!`
              : `Welcome to GroVr's Waitlist!`,
          react: WaitlistEmail({
            name: input.name,
            userType: input.userType,
          }),
        });
      }

      return response;
    } catch (e) {
      if (e instanceof Prisma.PrismaClientKnownRequestError) {
        if (e.code === "P2002") {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "Email already exists in database",
          });
        }
      }
      throw e;
    }
  }),
});
