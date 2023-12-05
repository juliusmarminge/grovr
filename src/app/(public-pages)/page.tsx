"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  FingerPrintIcon,
  NewspaperIcon,
  PaintBrushIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { Crisp } from "crisp-sdk-web";
import { motion, useInView } from "framer-motion";

import AnimatedArrowButton from "~/components/AnimatedArrowButton";
import AnimatedCounter from "~/components/AnimatedCounter";

import * as CONSTANTS from "~/constants";

function Hero() {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-indigo-600">
                  🚀 We’re in pre-launch
                </span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <Link href="/waitlist" className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Join our waitlist
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </div>
            <h1 className="mt-10 max-w-lg text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Build your product with the users
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Elevate your product development strategy with direct feedback
              from your ideal customers.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button
                onClick={() => Crisp.chat.open()}
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Contact us
              </button>
              <Link
                href="/product"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <motion.div
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
            initial={{
              opacity: 0,
              x: 150,
              y: 150,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
            }}
          >
            <svg
              viewBox="0 0 366 729"
              role="img"
              className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl"
            >
              <title>App screenshot</title>
              <defs>
                <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                  <rect width={316} height={684} rx={36} />
                </clipPath>
              </defs>
              <path
                fill="#4B5563"
                d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
              />
              <path
                fill="#343E4E"
                d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
              />
              <foreignObject
                width={316}
                height={684}
                transform="translate(24 24)"
                clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
              >
                <Image
                  src="/home/app-preview.png"
                  priority
                  height={1864}
                  width={860}
                  alt=""
                />
              </foreignObject>
            </svg>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function WhoUsesOurServices() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const pointers = [
    {
      name: "Designers",
      description:
        "Validate your UI and UX directly from your customers. Test your UI designs, Prototypes and visual creations.",
      icon: PaintBrushIcon,
    },
    {
      name: "Entrepreneurs",
      description:
        "Validate your idea using our tribe. Get quick feedbacks and build the MVP with us!",
      icon: RocketLaunchIcon,
    },
    {
      name: "Product Managers",
      description:
        "Get direct communication and test out the features instantly with your target audience. Understand the demand patterns and help create the most in demand product",
      icon: PuzzlePieceIcon,
    },
    {
      name: "Marketing",
      description:
        "Get your market research done using our community! Reach out to potential consumers directly to figure out the best way to market the product!",
      icon: NewspaperIcon,
    },
  ];
  return (
    <div
      className="relative isolate bg-gray-900 py-24 text-white sm:py-32"
      ref={ref}
    >
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee530"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y={-1} className="overflow-visible fill-gray-700">
          <path
            d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee530)"
        />
      </svg>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          initial={{
            opacity: 0,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 1,
          }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Who can leverage our services to improve their products
          </h2>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {pointers.map((point) => (
              <div key={point.name}>
                <dt className="text-base font-semibold leading-7 ">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <point.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {point.name}
                </dt>
                <dd className="mt-1 text-base leading-7 ">
                  {point.description}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
}

function WhyUseGroVr() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const features = [
    {
      name: "Instant Feedback",
      description:
        "Gather instant feedback from your target audience and get product insights which allows you to take data driven decisions for your product.",
      icon: ArrowPathIcon,
    },
    {
      name: "Customer First",
      description:
        "Build a customer centric product by including your users directly in your development workflow/sprint and collaborate with your users for product success.",
      icon: UserGroupIcon,
    },
    {
      name: "Greater Customer Engagement",
      description:
        "Achieve greater customer engagement with targeted feature testing by empowering your product strategy with data-driven decision making.",
      icon: ArrowTrendingUpIcon,
    },
    {
      name: "GroVr Tribe",
      description:
        "Tap into GroVr Tribe and get expert feedback and insights from a large and diverse tester community. Unlock diverse testing perspectives.",
      icon: FingerPrintIcon,
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32" ref={ref}>
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial={{
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
        }}
      >
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Why use GroVr
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Maximize your product's potential with GroVr
          </p>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-16 grid place-items-center">
          <AnimatedArrowButton onClick={() => Crisp.chat.open()}>
            Contact us
          </AnimatedArrowButton>
        </div>
      </motion.div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  return (
    <div className="relative isolate bg-gray-900 py-24 sm:py-32" ref={ref}>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_bottom_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee529"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M100 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>

        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee529)"
        />
      </svg>
      <motion.div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        initial={{
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
        }}
      >
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by testers worldwide
            </h2>
            {/* <p className="mt-4 text-lg leading-8 text-gray-300">
              Lorem ipsum dolor sit amet consect adipisicing possimus.
            </p> */}
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {CONSTANTS.STATS.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">
                  {stat.label}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">
                  {stat.prepend}
                  <AnimatedCounter value={stat.number} />
                  {stat.append}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  );
}

function ExperienceTheFutureOfBuilding() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });
  return (
    <div className="bg-white" ref={ref}>
      <motion.div
        className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8"
        initial={{
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1,
        }}
      >
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Experience the Future of Building
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Watch real people engage with your products, apps, or services,
              and easily get a vivid, first-person understanding of any
              experience.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                onClick={() => Crisp.chat.open()}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact us
              </button>
              <Link
                href="/product"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="relative mt-16 h-80 blur-sm lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

const Home = () => {
  return (
    <>
      <Hero />
      <WhoUsesOurServices />
      <WhyUseGroVr />
      <Stats />
      <ExperienceTheFutureOfBuilding />
    </>
  );
};

export default Home;
