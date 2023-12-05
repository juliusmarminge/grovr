"use client";

/* eslint-disable @next/next/no-img-element */
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import {
  BeakerIcon,
  CheckBadgeIcon,
  CheckIcon,
  DocumentCheckIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";

import { classNames } from "~/utils/helperFunctions";
import FAQ from "~/components/FAQ";
import Footer from "~/components/Footer";

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Why GroVr?", href: "#why-grovr" },
  { name: "Incentive", href: "#incentive" },
  { name: "FAQs", href: "#faqs" },
];

const whyGrovr = [
  {
    heading: "Early access to new products.",
    description:
      "You will be one of the first people to try out new products before they hit the market.",
    icon: CheckBadgeIcon,
  },

  {
    heading: "Opportunities to influence product development.",
    description:
      "Your feedback will help shape the development of new products and improve existing ones.",
    icon: CheckBadgeIcon,
  },

  {
    heading: "A chance to share your opinions.",
    description:
      "Your opinions matter to us, and we want to hear what you have to say about the products you test.",
    icon: CheckBadgeIcon,
  },

  {
    heading: "Earn money while testing.",
    description:
      "You will be rewarded in cash for every testing event you complete. You can earn up to $50/hour based on your profile and the type of testing",
    icon: CheckBadgeIcon,
  },

  {
    heading: "Personal Growth.",
    description:
      "Enhance your skills, knowledge, and expertise through hands-on product testing experiences, contributing to your personal and professional growth in the tech industry.",
    icon: CheckBadgeIcon,
  },

  {
    heading: "Expand Your Network.",
    description:
      "Connect with like-minded individuals within the GroVr tribe, building meaningful relationships, and expanding your professional network in the tech and product development industry.",
    icon: CheckBadgeIcon,
  },
];

const howItWorks = [
  {
    subHeading: "Things you must know",
    heading: "Basic Requirements",
    points: [
      "Laptop, Tablet or Mobile Phone",
      "Fluent in English",
      "At least 18 years old",
      "Accepts Bank Transfer or UPI",
      "Curious personality 💡",
    ],
    icon: DocumentCheckIcon,
  },
  {
    subHeading: "Your responsibilities",
    heading: "What will you be Testing",
    points: [
      "New feature for a product",
      "Performance of the application",
      "User Interface(UI) of the application",
      "Content of the application",
      "Navigation between features",
    ],
    icon: BeakerIcon,
  },
  {
    subHeading: "How to get started",
    heading: "Process of Joining a Testing Event",
    points: [
      "Join GroVr Tribe",
      "Apply to the Testing event",
      "Wait for Confirmation",
      "Accept the Invitation",
      "Start Testing",
    ],
    icon: MapIcon,
  },
];

const faqClassName = "text-base leading-7 text-gray-600 text-justify";
const faqs = [
  {
    question: "How can I become a member of the GroVr tribe?",
    answer: (
      <p className={faqClassName}>
        You can become a member of the GroVr tribe by visiting our website and
        signing up using your email or social media accounts.
      </p>
    ),
  },
  {
    question:
      "How often will I have the opportunity to participate in user testing?",
    answer: (
      <p className={faqClassName}>
        The frequency of user testing opportunities may vary, but we strive to
        provide our tribe members with a range of testing projects throughout
        the year.
      </p>
    ),
  },
  {
    question: "What types of products and services will I be testing?",
    answer: (
      <p className={faqClassName}>
        As a member of the GroVr tribe, you will have the opportunity to test a
        diverse range of products and services, including apps, websites,
        software, and more.
      </p>
    ),
  },
  {
    question: "Will I be compensated for participating in user testing?",
    answer: (
      <p className={faqClassName}>
        Yes, we offer compensation upto $50/hour for your participation in user
        testing projects. The exact compensation may vary depending on the
        specific project and its requirements.
      </p>
    ),
  },
  {
    question: "How long does a typical user testing session last?",
    answer: (
      <p className={faqClassName}>
        The duration of user testing sessions can vary depending on the project,
        but they typically range from 30 minutes to one hour.
      </p>
    ),
  },
  {
    question: "Can I choose which user testing projects to participate in?",
    answer: (
      <p className={faqClassName}>
        Yes, as a GroVr tribe member, you can choose which user testing projects
        you want to participate in based on your interests and availability.
      </p>
    ),
  },
  {
    question:
      "Can I participate in user testing remotely or do I need to be physically present?",
    answer: (
      <p className={faqClassName}>
        We offer only remote user testing opportunities, allowing you to
        participate based on your location and preference.
      </p>
    ),
  },
  {
    question:
      "Are there any specific requirements or qualifications to join the GroVr tribe?",
    answer: (
      <p className={faqClassName}>
        While there are no strict requirements to join the GroVr tribe, having a
        keen eye for detail, good communication skills, and a passion for
        providing valuable feedback is beneficial.
      </p>
    ),
  },
  {
    question:
      "Is there a limit to the number of user testing projects I can participate in?",
    answer: (
      <p className={faqClassName}>
        There is no set limit to the number of user testing projects you can
        participate in. You can take part in as many projects as your
        availability allows.
      </p>
    ),
  },
  {
    question:
      "How can I engage with other members of the GroVr tribe and share my experiences?",
    answer: (
      <p className={faqClassName}>
        You can engage with other members of the GroVr tribe through our
        community forums, social media groups, and interactive events. Share
        your experiences, ask questions, and connect with fellow testers.
      </p>
    ),
  },
  {
    question:
      "Are there any opportunities for ongoing training and skill development in user testing?",
    answer: (
      <p className={faqClassName}>
        Yes, we provide resources, articles, and webinars to help you enhance
        your user testing skills and stay updated with the latest industry
        practices.
      </p>
    ),
  },
  {
    question:
      "How can I track my progress and performance as a GroVr tribe member?",
    answer: (
      <p className={faqClassName}>
        You can track your progress and performance as a GroVr tribe member
        through your personalized dashboard, which displays your completed
        projects, rewards earned, and other relevant metrics.
      </p>
    ),
  },
  {
    question:
      "Is there a referral program that allows me to invite others to join the GroVr tribe?",
    answer: (
      <p className={faqClassName}>
        Yes, we have a referral program that rewards you for inviting others to
        join the GroVr tribe. You can earn additional rewards for successful
        referrals.
      </p>
    ),
  },
  {
    question:
      "What happens if I encounter technical issues during a user testing session?",
    answer: (
      <p className={faqClassName}>
        In the event of technical issues during a user testing session, our
        support team is available to assist you. You can reach out to them for
        troubleshooting and guidance.
      </p>
    ),
  },
  {
    question: "Who can join GroVr tribe for testing new products",
    answer: (
      <div className={faqClassName}>
        <ol className="mx-auto mt-4 max-w-3xl list-disc">
          <li>Product Managers</li>

          <li>Developers</li>

          <li>Software Testers</li>

          <li>Marketing Professionals</li>

          <li>Designers</li>

          <li>Students</li>

          <li>Other Professionals</li>
        </ol>
      </div>
    ),
  },
];

const incentives = [
  { name: "By joining Focus Groups", value: "₹ 6,000" },
  { name: "By participating in a Testing Event", value: "₹ 5,000" },
  { name: "By filling up a Survey", value: "₹ 100" },
];

const featuredTestimonial = {
  body: "GroVr has provided me with amazing opportunities to test and provide feedback on various apps. It's a rewarding experience that allows me to contribute my insights and make a difference. Highly recommended!",
  author: {
    name: "Simran Agnihotri",
    designation: "APM, Springworks",
    imageUrl: "/testimonials/testers/simran.jpeg",
    // logoUrl: "https://tailwindui.com/img/logos/savvycal-logo-gray-900.svg",
  },
};
const testimonials = [
  [
    [
      {
        body: "I had the pleasure of working with GroVr, a remarkable company that provided me with an opportunity to test applications. From start to finish, my experience with GroVr was exceptional and what impressed me the most about GroVr was their commitment to quality assurance.",
        author: {
          name: "Yathish",
          designation: "Student",
          imageUrl: "/testimonials/testers/yathish.jpg",
        },
      },
    ],
    [
      {
        body: "I had fun testing with GroVr,  had enough time to play around and know the system. Support from the team was fantastic and helped make it a stress free experience. Would love work with them again! Anyone interested in testing out new products should check it out!",
        author: {
          name: "Chetan",
          designation: "Product Consultant, Hubler",
          imageUrl: "/testimonials/testers/chetan.jpeg",
        },
      },
    ],
  ],
  [
    [
      {
        body: "Being a member of the GroVr community has been a game-changer for me. I get to test apps, share my feedback, and earn rewards. It's a win-win situation, and I highly recommend joining GroVr if you're passionate about technology and want to make a difference.",
        author: {
          name: "Arsh",
          designation: "UX Researcher, Innovacer",
          imageUrl: "/testimonials/testers/arsh.jpeg",
        },
      },
    ],
    [
      {
        body: "I've had an amazing experience working with GroVr. The team is supportive, and the testing process is smooth and well-organized. It's a great way to earn some extra income while enjoying the latest apps!",
        author: {
          name: "Priyanka",
          designation: "Senior Marketing Manager, Upscalio",
          imageUrl: "/testimonials/testers/priyanka.jpeg",
        },
      },
    ],
  ],
];

export default function Tribe() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whyGroVrRef = useRef<HTMLDivElement | null>(null);
  const faqRef = useRef<HTMLDivElement | null>(null);

  const inViewProperties = {
    once: true,
    amount: 0.4,
  };

  const isWhyGrovrInView = useInView(whyGroVrRef, inViewProperties);
  const isFaqInView = useInView(faqRef, inViewProperties);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white"
    >
      {/* Header */}
      <header className={`absolute inset-x-0 top-0 z-50`}>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 flex place-items-center gap-2 p-1.5"
            >
              <span className="sr-only">GroVr</span>
              <Image
                className="h-8 w-auto"
                src="/logo.png"
                alt="GroVr Logo"
                height={32}
                width={32}
              />
              <span className="font-montserrat text-lg text-white">GroVr</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white"
                scroll={false}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/waitlist"
              className="text-sm font-semibold leading-6 text-white"
            >
              Join our Waitlist <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/sign-in"
              className="text-sm font-semibold leading-6 text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                href="/"
                className="-m-1.5 flex place-items-center gap-2 p-1.5"
              >
                <span className="sr-only">GroVr</span>
                <Image
                  className="h-8 w-auto"
                  src="/logo.png"
                  alt="GroVr Logo"
                  height={32}
                  width={32}
                />
                <span className="font-montserrat text-lg text-secondary">
                  GroVr
                </span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/waitlist"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Join our Waitlist
                  </Link>
                </div>
                {/* <div className="py-6">
                  <Link
                    href="/sign-in"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </Link>
                </div> */}
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-gray-900 pb-16 pt-14 sm:pb-20">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2830&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
                  See what our Tribe members are saying.{" "}
                  <Link
                    href="#testimonials"
                    className="font-semibold text-white"
                    // scroll={false}
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                  Earn Money By Testing Your Favourite Apps
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  With GroVr, you can earn money by testing and providing
                  feedback on your favourite apps. Get rewarded upto $50/hour
                  for your expertise and help shape the future of app
                  development.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <Link
                    href="/waitlist"
                    className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                  >
                    Join our waitlist ⚡️
                    {/* Join our Tribe */}
                  </Link>
                  <Link
                    href="#how-it-works"
                    className="text-sm font-semibold leading-6 text-white"
                    // scroll={false}
                  >
                    How it works <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Logo cloud */}
            <div className="mx-auto flex max-w-lg justify-around gap-x-8 gap-y-10 sm:max-w-xl sm:gap-x-10">
              <img
                className="object-contain"
                src="/testimonials/mad-influence-white.png"
                alt="MAD Influence"
                width={150}
                height={150}
              />
              <img
                className="object-contain"
                src="/testimonials/go-punt-logo-white.png"
                alt="Go Punt"
                width={150}
                height={150}
              />
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>

        {/* Why GroVr section */}
        <div className="mt-32 sm:mt-56" id="why-grovr" ref={whyGroVrRef}>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Everything you need to know
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Why GroVr?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Here is why you should join GroVr Tribe
              </p>
            </div>
          </div>
          {/* <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <img
                src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                alt="App screenshot"
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                width={2432}
                height={1442}
              />
              <div className="relative" aria-hidden="true">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div> */}
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {whyGrovr.map((feature, i) => (
                <motion.div
                  key={feature.heading}
                  className="relative pl-9"
                  initial={{ opacity: 0 }}
                  animate={isWhyGrovrInView ? { opacity: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.3,
                  }}
                >
                  <dt className="inline font-semibold text-gray-900">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.heading}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>

        {/* Incentive section */}

        <div
          className="relative isolate mt-48 overflow-hidden bg-gray-900 py-24 sm:py-32"
          id="incentive"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80&blend=111827&blend-mode=multiply&sat=-100&exp=15"
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div
              className="absolute -bottom-8 -left-96 -z-10 transform-gpu blur-3xl sm:-bottom-64 sm:-left-40 lg:-bottom-32 lg:left-8 xl:-left-10"
              aria-hidden="true"
            >
              <div
                className="aspect-[1266/975] w-[79.125rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              />
            </div>
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h2 className="text-base font-semibold leading-8 text-indigo-400">
                Earn with GroVr
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Trusted by thousands of Testers in India 🇮🇳
              </p>
              <p className="mb-2 mt-6 text-lg leading-8 text-gray-300">
                Earn money in your spare time by Testing applications.
              </p>
              <Link
                href="#how-it-works"
                className="font-semibold text-white"
                scroll={false}
              >
                Learn how <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
              {incentives.map((incentive, idx) => (
                <div
                  key={idx}
                  className="flex flex-col border-l border-white/10 pl-6"
                >
                  <p className="mb-1 text-xs leading-6">Earn upto</p>
                  <dd className=" mb-4 text-3xl font-semibold tracking-tight">
                    {incentive.value}
                  </dd>
                  <dt className="text-sm leading-6">{incentive.name}</dt>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* How it works section */}
        <div className="mt-12 bg-white py-24 sm:py-32" id="how-it-works">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Discover, Join, Test, and Shape: Unlock your potential as a
                Grovr Tribe member.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row">
              {howItWorks.map((how, idx) => (
                <div
                  className="overflow-hidden bg-white pt-24 sm:w-1/3"
                  key={idx}
                >
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl lg:max-w-none">
                      <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                          <h2 className="text-base font-semibold leading-7 text-indigo-600">
                            {how.subHeading}
                          </h2>
                          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                            {how.heading}
                          </p>

                          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            {how.points.map((point, i) => (
                              <div key={i} className="relative pl-9">
                                <dt className="inline font-semibold text-gray-900">
                                  <CheckIcon
                                    className="absolute left-0 top-1 h-5 w-5 text-indigo-500"
                                    aria-hidden="true"
                                  />
                                </dt>{" "}
                                <dd className="inline">{point}</dd>
                              </div>
                            ))}
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials section */}
        <div
          className="relative isolate bg-white pb-32 pt-24 sm:pt-32"
          id="testimonials"
        >
          <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
            aria-hidden="true"
          >
            <div
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                Testimonials
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                We have worked with thousands of amazing people
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
              <figure className="col-span-2 hidden sm:block sm:rounded-2xl sm:bg-white sm:shadow-lg sm:ring-1 sm:ring-gray-900/5 xl:col-start-2 xl:row-end-1">
                <blockquote className="p-12 text-xl font-semibold leading-8 tracking-tight text-gray-900">
                  <p>{`“${featuredTestimonial.body}”`}</p>
                </blockquote>
                <figcaption className="flex items-center gap-x-4 border-t border-gray-900/10 px-6 py-4">
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={featuredTestimonial.author.imageUrl}
                    alt={`${featuredTestimonial.author.name}'s image`}
                    height={40}
                    width={40}
                  />
                  <div className="flex-auto">
                    <div className="font-semibold">
                      {featuredTestimonial.author.name}
                    </div>
                    <div className="text-gray-600">
                      {featuredTestimonial.author.designation}
                    </div>
                  </div>
                  {/* <img
                    className="h-10 w-auto flex-none"
                    src={featuredTestimonial.author.logoUrl}
                    alt=""
                  /> */}
                </figcaption>
              </figure>
              {testimonials.map((columnGroup, columnGroupIdx) => (
                <div
                  key={columnGroupIdx}
                  className="space-y-8 xl:contents xl:space-y-0"
                >
                  {columnGroup.map((column, columnIdx) => (
                    <div
                      key={columnIdx}
                      className={classNames(
                        (columnGroupIdx === 0 && columnIdx === 0) ||
                          (columnGroupIdx === testimonials.length - 1 &&
                            columnIdx === columnGroup.length - 1)
                          ? "xl:row-span-2"
                          : "xl:row-start-1",
                        "space-y-8",
                      )}
                    >
                      {column.map((testimonial) => (
                        <figure
                          key={testimonial.author.designation}
                          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                        >
                          <blockquote className="text-gray-900">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <img
                              className="h-10 w-10 rounded-full bg-gray-50"
                              src={testimonial.author.imageUrl}
                              alt={`${testimonial.author.name}'s image`}
                              height={40}
                              width={40}
                            />
                            <div>
                              <div className="font-semibold">
                                {testimonial.author.name}
                              </div>
                              <div className="text-gray-600">
                                {testimonial.author.designation}
                              </div>
                            </div>
                          </figcaption>
                        </figure>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div
          className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
          id="faqs"
          ref={faqRef}
        >
          <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
              Frequently asked questions
            </h2>
            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq, i) => (
                <FAQ key={i} faq={faq} index={i} isInView={isFaqInView} />
              ))}
            </dl>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
}
