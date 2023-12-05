"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import AnimatedCounter from "~/components/AnimatedCounter";
import * as constants from "~/constants";

const values = [
  {
    name: "Always be learning",
    description:
      "This reflects our commitment to continuous personal and professional growth. We encourage our team to seek knowledge, embrace new ideas, and stay updated with the latest industry trends.",
  },
  {
    name: "Plan with intelligence, and execute with passion",
    description:
      "This value is rooted in our commitment to create thoughtful and innovative solutions while delivering them with empathy and passion.",
  },
  {
    name: "It’s best to do one thing really, really well",
    description:
      "By focusing on our core strengths and delivering quality solutions, we aim to exceed our clients' expectations and establish ourselves as the best in our field.",
  },
  {
    name: "Transparency and being direct is always the fastest",
    description:
      "We believe that honest communication and clarity lead to stronger partnerships and better outcomes for everyone involved.",
  },
];
const team = [
  {
    name: "Vivek Madhavan",
    role: "Co-Founder / CEO",
    imageUrl: "/about/vivek.jpeg",
  },
  {
    name: "Master Techie",
    role: "Co-Founder / CTO",
    imageUrl: "/about/dummy-cto.png",
    isBlur: true,
  },
];

export default function About() {
  const valuesSectionRef = useRef<HTMLDivElement | null>(null);
  const valuesSectionIsInView = useInView(valuesSectionRef, {
    once: true,
    amount: 0.4,
  });
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
          className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
          aria-hidden="true"
        >
          <div
            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
            }}
          />
        </div>
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <motion.div
                className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl"
                initial={{
                  opacity: 0,
                  x: -100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  We are revolutionising the way your Products are tested
                </h1>
                <p className="relative mt-6 text-justify text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                  Our platform provides companies with efficient tools for this
                  purpose. Real users and UX experts test products, offering
                  various perspectives to improve understanding of user
                  interaction. At GroVr, we empower companies to take control of
                  product development by streamlining the feedback and testing
                  process. This enables companies to create products that meet
                  customer needs.
                </p>
              </motion.div>
              <motion.div
                className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
                initial={{
                  opacity: 0,
                  x: 100,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div className="relative">
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt=""
                      className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Content section */}
      <div className="mx-auto -mt-12 max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl leading-8 text-gray-600">
                At GroVr, our mission is to provide a platform for community-led
                product testing that empowers both consumers and clients. We
                strive to connect companies with their target audience, giving
                consumers a voice in shaping the products they use every day.
              </p>
              <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                <p>
                  Our commitment to transparency, innovation, and accountability
                  ensures that we provide valuable insights and feedback to our
                  clients, helping them create products that meet the needs and
                  exceed the expectations of their customers.
                </p>
                <p className="mt-10">
                  We aim to foster a community that is dedicated to improving
                  the quality and value of the products that we use in our daily
                  lives.
                </p>
              </div>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {constants.STATS.map((stat) => (
                  <div key={stat.id} className="flex flex-col-reverse gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.prepend}
                      <AnimatedCounter
                        value={stat.number}
                        autorun
                        key={stat.id}
                      />
                      {stat.append}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* img section */}
      <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
          alt=""
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
      </div>

      {/* Values section */}
      <div
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8"
        ref={valuesSectionRef}
      >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our values
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Core principles and ideals we live by
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {values.map((value) => (
            <motion.div
              key={value.name}
              className="max-w-md"
              initial={{
                opacity: 0,
                x: 100,
                y: -100,
              }}
              animate={
                valuesSectionIsInView
                  ? {
                      opacity: 1,
                      x: 0,
                      y: 0,
                    }
                  : {}
              }
              transition={{
                duration: 0.5,
              }}
            >
              <dt className="font-semibold text-gray-900">{value.name}</dt>
              <dd className="mt-1 text-justify text-gray-600">
                {value.description}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>

      {/* Logo cloud */}
      <div className="relative isolate -z-10 mt-32 sm:mt-48">
        <div className="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
          <svg
            className="h-[40rem] w-[80rem] flex-none stroke-gray-200"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                width={200}
                height={200}
                x="50%"
                y="50%"
                patternUnits="userSpaceOnUse"
                patternTransform="translate(-100 0)"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y="50%" className="overflow-visible fill-gray-50">
              <path
                d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
            />
          </svg>
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid w-full grid-cols-2 items-center gap-4 lg:grid-cols-4">
            {/* <div className="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5"> */}
            <Image
              className="col-span-2 mx-auto object-contain lg:col-span-1"
              src="/testimonials/mad-influence.png"
              alt="MAD Influence"
              width={150}
              height={150}
            />
            <Image
              className="col-span-2 mx-auto object-contain lg:col-span-1"
              src="/testimonials/go-punt-logo.png"
              alt="Go Punt"
              width={150}
              height={150}
            />
            <Image
              className="col-span-2 mx-auto object-contain lg:col-span-1"
              src="/testimonials/alignsy.png"
              alt="Alignsy"
              width={150}
              height={150}
            />
            <Image
              className="col-span-2 mx-auto bg-black object-contain lg:col-span-1"
              src="/testimonials/deciml.png"
              alt="Deciml"
              width={150}
              height={150}
            />
            <Image
              className="mx-auto bg-black object-contain"
              src="/testimonials/go-fantasy-blue.png"
              alt="Go Fantasy Blue"
              width={150}
              height={150}
            />
            <Image
              className="mx-auto object-contain"
              src="/testimonials/xley.png"
              alt="Xley"
              width={150}
              height={150}
            />
            <Image
              className="mx-auto object-contain"
              src="/testimonials/dualite.png"
              alt="Dualite"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-48 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the team of talented individuals working behind the scenes to
            make Grovr successful.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
        >
          {team.map((person) => (
            <li key={person.name} className="select-none">
              <img
                className={`mx-auto h-24 w-24 rounded-full ${
                  person.isBlur ? "blur-sm" : ""
                }`}
                height={96}
                width={96}
                src={person.imageUrl}
                alt={person.name}
                draggable="false"
              />
              <h3
                className={`mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 ${
                  person.isBlur ? "blur-sm" : ""
                }`}
              >
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
