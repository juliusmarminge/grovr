"use client";

import { useRef, useState } from "react";
import confetti from "canvas-confetti";
import { Crisp } from "crisp-sdk-web";
import { motion, useInView } from "framer-motion";
import { useForm, type SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import Lottie from "react-lottie";
import { z } from "zod";

import { api } from "~/trpc/react";
import FAQ from "~/components/FAQ";

import { FAQS } from "~/constants";
import animationData from "../../../../public/lottie/tick-animation.json";

const waitlistFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email().min(1),
  userType: z.enum(["COMPANY", "TESTER"]),
});

const FADE_DOWN_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

const BLUR_IN_ANIMATION_VARIANTS = {
  hidden: { filter: "blur(10px)", opacity: 0 },
  visible: { filter: "blur(0px)", opacity: 1 },
};

const FADE_UP_ANIMATION_VARIANTS = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring" } },
};

export default function WaitlistPage() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });
  const [addedToWaitlist, setAddedToWaitlist] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const lottieDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { register, handleSubmit, reset } =
    useForm<z.infer<typeof waitlistFormSchema>>();

  const { mutate } = api.waitlist.addToWaitlist.useMutation({
    onSuccess: () => {
      void confetti({
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      void confetti({
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
      toast.success("You are in the waitlist now!");
      setAddedToWaitlist(true);
      setIsSubmitting(false);
      reset();
    },
    onError: (err) => {
      if (err.message.includes("Unique constraint failed")) {
        toast.error("You are already in the waitlist!");
        reset();
        return;
      }
      toast.error("Something went wrong!");
      reset();
      setIsSubmitting(false);
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof waitlistFormSchema>> = (
    data,
  ) => {
    setIsSubmitting(true);
    mutate(data);
  };

  return (
    <main className="isolate overflow-hidden">
      {/* Hero section */}
      <div className="relative isolate -z-10">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        <div
          className="absolute inset-x-0 -z-10 h-full transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-32 px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
        <div className="mt-16 flex flex-col items-center justify-center gap-8 lg:w-[60%]">
          <motion.div
            className="relative text-center"
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <div
              className="absolute inset-x-0 -right-80 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl lg:-right-[20rem] lg:-top-[15rem]"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[66.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[69.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <motion.h2
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Get early access to GroVr
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-8 text-gray-600"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Join our waitlist to be one of the very first to get access when
              we launch!
            </motion.p>
          </motion.div>
          {!addedToWaitlist ? (
            <motion.form
              initial="hidden"
              animate="visible"
              transition={{ delay: 1, duration: 0.4 }}
              onSubmit={handleSubmit(onSubmit)}
              variants={BLUR_IN_ANIMATION_VARIANTS}
              className="w-full rounded-xl bg-neutral-50/20 shadow-xl ring-1 ring-gray-300 backdrop-blur-[80px] md:col-span-2 lg:w-[90%]"
            >
              <div className="px-4 py-6 sm:p-8">
                <div className="flex flex-col gap-4">
                  <div className="flex w-full flex-col gap-4 lg:flex-row">
                    <div className="w-full sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Full name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          type="text"
                          autoComplete="given-name"
                          placeholder="John Doe"
                          className="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                          {...register("name", {
                            required: true,
                          })}
                        />
                      </div>
                    </div>
                    <div className="w-full sm:col-span-3">
                      <label
                        htmlFor="userType"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        You want access as a
                      </label>
                      <select
                        id="userType"
                        className="mt-2 block w-full rounded-md border-0 bg-transparent py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary sm:text-sm sm:leading-6"
                        defaultValue="Company"
                        {...register("userType", {
                          required: true,
                        })}
                      >
                        <option value="COMPANY">Company</option>
                        <option value="TESTER">Tester</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Work email
                    </label>
                    <div className="mt-2">
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="johndoe@gmail.com"
                        className="block w-full rounded-md border-0 bg-transparent py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                        {...register("email", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="max-w-max rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isSubmitting ? "Adding to waitlist" : "Count me in!"}
                    {isSubmitting && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        className="ml-1 inline-block"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                          opacity=".25"
                        />
                        <path
                          fill="currentColor"
                          d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                        >
                          <animateTransform
                            attributeName="transform"
                            dur="0.75s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </motion.form>
          ) : (
            <motion.div
              className="relative flex w-full flex-col items-center justify-center text-center"
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <div
                className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-right-80 sm:-top-80 lg:-right-[30rem] lg:-top-[20rem]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
              <Lottie options={lottieDefaultOptions} height={200} width={200} />
              <motion.h2
                className="flex items-center justify-center gap-4 text-xl font-bold tracking-tight text-gray-900 lg:text-2xl"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                You have been added to the waitlist!
              </motion.h2>
              <motion.p
                className="mt-2 leading-8 text-gray-600 sm:text-base"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                Sit back and relax. We will notify you when you can start using
                GroVr.
              </motion.p>
            </motion.div>
          )}
        </div>
        <div
          className="flex w-full max-w-7xl flex-col items-center justify-center gap-8"
          ref={ref}
        >
          <motion.div
            className="text-center md:w-[80%] lg:w-[60%]"
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            <motion.h2
              className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Still got questions?
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-8 text-gray-600"
              variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
              Here are some of the most frequently asked questions about GroVr.
              If you still have questions, feel free to{" "}
              <button
                onClick={() => Crisp.chat.open()}
                className="text-primary hover:underline"
              >
                contact
              </button>{" "}
              us.
            </motion.p>
          </motion.div>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10 lg:w-[48rem]">
            {FAQS.map((faq, i) => (
              <FAQ key={i} faq={faq} index={i} isInView={isInView} />
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
