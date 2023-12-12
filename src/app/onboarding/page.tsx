'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { Crisp } from "crisp-sdk-web";

import { api } from "~/trpc/react";
import LoadingSpinner from "~/components/LoadingSpinner";

const USER_TYPES = [
  {
    type: "TESTER",
    description:
      "I am an Individual and want to test exciting early stage products, while making some money.",
    learnMore: "/tribe",
  },
  {
    type: "COMPANY",
    description:
      "I am part of a Company and I want to get my products user tested.",
    learnMore: "/product",
  },
] as const;

export default function Onboarding() {
  const router = useRouter();

  const [userType, setUserType] =
    useState<(typeof USER_TYPES)[number]["type"]>();

  const { data: userData, refetch: refetchUserData } =
    api.user.getUserData.useQuery();

  const { mutate, isLoading } = api.user.createUserData.useMutation({
    onSuccess: () => {
     void refetchUserData();
    },
  });

  useEffect(() => {
    if (userData?.userType) {
      if (userData.userType === "COMPANY") {
        router.replace("/dashboard");
      } else {
        router.replace("/timeline");
      }
    }
  }, [userData]);

  return (
    <div className="relative isolate">
      <nav className="absolute z-10 flex w-full justify-between p-6">
        <div className="-m-1.5 flex place-items-center gap-2 p-1.5">
          <Image
            className="h-8 w-auto"
            height={32}
            width={32}
            src="/logo.png"
            alt="GroVr Logo"
            priority
          />
          <span className="font-montserrat text-lg text-white">GroVr</span>
        </div>
        <UserButton afterSignOutUrl="/sign-in" />
      </nav>

      <div className="flex h-screen flex-col sm:flex-row sm:overflow-hidden">
        <div className="relative isolate h-1/3 overflow-hidden bg-secondary p-16 sm:h-full sm:w-1/2">
          <h1 className="mt-[10%] text-3xl font-bold leading-snug text-primary sm:mt-[30%] sm:max-w-lg sm:text-6xl">
            Are you a Tester or a Company?
          </h1>

          <div className="absolute right-[-20%] top-[-25%] hidden select-none opacity-30 sm:block">
            <Image height={450} width={450} src="/logo.png" alt="" />
          </div>
          <div className="absolute bottom-[-25%] right-[6%] select-none opacity-10 sm:opacity-30">
            <Image height={600} width={600} src="/logo.png" alt="" />
          </div>
        </div>

        <div className="relative isolate h-2/3 bg-white sm:h-full sm:w-1/2">
          <div className="mx-8 mt-[10%] flex flex-col gap-8 sm:mx-16 sm:mt-[30%]">
            {USER_TYPES.map(({ type, description, learnMore }, idx) => (
              <div
                className={`relative isolate cursor-pointer rounded-md ${
                  userType === type
                    ? "border-2 border-dashed border-green-500"
                    : "border-2 border-dashed"
                } p-4`}
                key={idx}
                onClick={() => setUserType(type)}
                tabIndex={0}
              >
                <p className="text-2xl font-bold">{type}</p>

                <p className="mt-2 text-sm italic text-slate-500">
                  {description}{" "}
                  <span>
                    <a
                      className="text-primary hover:underline"
                      href={learnMore}
                      target="_blank"
                      rel="external nofollow noopener"
                    >
                      Learn more
                    </a>
                  </span>
                </p>
                {userType === type && (
                  <div className="absolute right-[-20px] top-[-20px]">
                    <CheckCircleIcon
                      className="h-10 w-10 bg-white text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                )}
              </div>
            ))}

            <button
              className={`rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
                !userType || isLoading ? "cursor-not-allowed opacity-30" : ""
              } relative`}
              disabled={!userType || isLoading}
              onClick={() => {
                if (userType) {
                  mutate({
                    userType,
                  });
                }
              }}
            >
              {userType ? `Continue as a ${userType}` : "Continue"}{" "}
              <span aria-hidden="true">→</span>
              {isLoading && (
                <div role="status" className="absolute right-0 top-2">
                  <LoadingSpinner />
                </div>
              )}
            </button>

            <p className="mb-16 text-xs text-slate-500">
              **NOTE: Please make sure you choose the appropriate option, if you
              are unsure what option to select then{" "}
              <span>
                <button
                  onClick={() => Crisp.chat.open()}
                  className="text-primary hover:underline"
                >
                  Contact us.
                </button>
              </span>
            </p>
          </div>

          <footer className="bottom-0 left-0 flex gap-4 p-6 text-xs sm:absolute">
            <Link
              href="/terms"
              target="_blank"
              rel="external nofollow noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              target="_blank"
              rel="external nofollow noopener"
              className="text-gray-400 hover:text-gray-500"
            >
              Privacy
            </Link>
          </footer>
        </div>
      </div>
    </div>
  );
}
