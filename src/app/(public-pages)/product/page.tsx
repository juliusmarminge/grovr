"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import Image from "next/image";
import { CheckIcon } from "@heroicons/react/20/solid";
import {
  CursorArrowRippleIcon,
  FolderPlusIcon,
  MagnifyingGlassIcon,
  PresentationChartBarIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { Crisp } from "crisp-sdk-web";
import { AnimatePresence, motion, useInView } from "framer-motion";

import AnimatedArrowButton from "~/components/AnimatedArrowButton";
import FAQ from "~/components/FAQ";

import { FAQS } from "~/constants";

function Section1() {
  const features = [
    {
      name: "Survey / Questionnaire",
      description:
        "We offer a survey service with a diverse community of testers to gather feedback on preferences and behaviors. Customize questions and choose question types.",
      icon: QuestionMarkCircleIcon,
    },
    {
      name: "Focus Groups",
      description:
        "We provide a focus group service to collect qualitative data from testers through guided discussions. Get a recording of the event for deeper insights.",
      icon: UserGroupIcon,
    },
    {
      name: "Testing + Feedback",
      description:
        "We offer a testing and feedback service with quantitative and qualitative methods. Testers record their experience and give one-on-one feedback to your team.",
      icon: CursorArrowRippleIcon,
    },
    {
      name: "Competitive Analysis",
      description:
        "We offer a competitive analysis service which allows you to test your products against the competitors' to identify strengths and weaknesses, improve your product accordingly.",
      icon: MagnifyingGlassIcon,
    },
  ];
  return (
    <div className="relative isolate -z-10 bg-white py-24 sm:py-32 ">
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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Community-Powered GroVr Solutions
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            GroVr's streamlined product testing solutions make the product
            testing process more efficient and cost-effective, helping companies
            to save time and resources while still receiving high-quality
            insights and feedback.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, i) => (
              <motion.div
                key={feature.name}
                className="flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.15,
                }}
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  {/* <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm font-semibold leading-6 text-indigo-600"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p> */}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

function Section2() {
  const [activeTab, setActiveTab] = useState(0);
  const featureTabs = [
    {
      name: "Create Events",
      icon: FolderPlusIcon,
    },
    {
      name: "Recruit Testers",
      icon: UserPlusIcon,
    },
    {
      name: "Analyse Results",
      icon: PresentationChartBarIcon,
    },
  ];

  const tabContent = [
    {
      title: "Start creating events in minutes!",
      description:
        "Create & customize your event according to your needs. Add tasks and questions to your event and get the feedback you need.",
      image: "/features/feature-s1.png",
      features: [
        {
          name: "Easy setup in minutes",
          description:
            "With us setting up a product test is quick and easy, allowing you to get valuable feedback from your target audience in no time.",
        },
        {
          name: "Set Tasks and Test Scenario",
          description:
            "Our product allows you to set tasks and test scenarios that are tailored to your product, enabling you to get valuable insights into how users interact with it.",
        },
      ],
    },
    {
      title: "Recruit testers according to your needs",
      description:
        "Recruit testers for your product based on your target audience. We have a diverse community of testers that can be filtered according to your needs.",
      image: "/features/feature-s2.png",
      features: [
        {
          name: "Choose Real Users or UX Experts and gather Audience Insights",
          description:
            "With GroVr, you have the option to choose real users or UX experts to test your product, providing valuable insights into how your target audience interacts with your product.",
        },
        {
          name: "Demographics matching your Customers and Users",
          description:
            "Our platform allows you to select testers that match the demographics of your target audience, ensuring that you get relevant and valuable feedback.",
        },
      ],
    },
    {
      title: "Analyse results and get actionable insights",
      description:
        "Get actionable insights from your product test results. Analyse the results and get a detailed report of the feedback from testers.",
      image: "/features/feature-s3.png",
      features: [
        {
          name: "Recording and Export recordings",
          description:
            "Testers will record product testing sessions and you can export them for future analysis, allowing you to review and improve your product based on valuable insights.",
        },
        {
          name: "Speech-To-Text-Transcripts",
          description:
            "We also provide speech-to-text transcripts of product testing sessions, making it easy to review and analyse feedback from testers.",
        },
      ],
    },
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto mb-6 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 rounded-3xl bg-gray-50 p-6 lg:gap-6 lg:shadow-md">
          {featureTabs.map((feature, i) => (
            <button
              key={feature.name}
              className={`flex w-full flex-col items-center justify-center gap-2 rounded-xl p-2 shadow-md lg:flex-row lg:p-4 ${
                i === activeTab
                  ? "bg-primary/10 text-primary"
                  : "bg-white text-gray-700"
              }`}
              onClick={() => setActiveTab(i)}
            >
              <feature.icon className="h-6 w-6 lg:h-8 lg:w-8" />

              <span>{feature.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <AnimatePresence>
          <motion.div
            key={activeTab}
            className="relative isolate overflow-hidden bg-gray-50 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 lg:shadow-lg xl:px-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
            }}
          >
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
              <div className="lg:row-start-2 lg:max-w-md">
                <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
                  {tabContent[activeTab]?.title}
                </h2>
                <p className="mt-6 text-lg leading-8 text-gray-700">
                  {tabContent[activeTab]?.description}
                </p>
              </div>
              <Image
                src={tabContent[activeTab]?.image ?? ""}
                alt="Product screenshot"
                className="relative z-10 min-w-full max-w-xl rounded-xl object-right shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
                width={2432}
                height={1442}
              />
              <div className="max-w-xl lg:row-start-3 lg:mt-6 lg:max-w-md lg:border-t lg:border-black/10 lg:pt-6">
                <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none">
                  {tabContent[activeTab]?.features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="font-semibold text-gray-900">
                        <CheckIcon
                          className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>
                      <dd className="mt-2">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div
              className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              aria-hidden="true"
            >
              <div
                className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-25"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function FAQs() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.4,
  });
  return (
    <div className="bg-white" id="faqs" ref={ref}>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {FAQS.map((faq, i) => (
              <FAQ key={i} faq={faq} index={i} isInView={isInView} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

const Product = () => {
  return (
    <>
      <Section1 />
      <Section2 />
      <FAQs />

      <div className="grid place-items-center">
        <AnimatedArrowButton onClick={() => Crisp.chat.open()}>
          Contact us
        </AnimatedArrowButton>
      </div>
    </>
  );
};

export default Product;
