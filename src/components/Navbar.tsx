"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const navigation = [
  { name: "About us", href: "/about" },
  { name: "Product", href: "/product" },
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/product#faqs", scroll: false },
  {
    name: "Waitlist",
    href: "/waitlist",
    tagJSX: (
      <span className="inline-flex animate-pulse items-center gap-x-1.5 rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
        🔥 Hot
      </span>
    ),
  },
];

const LogoJSX = (
  <Link href="/" className="-m-1.5 flex place-items-center gap-2 p-1.5">
    <Image
      className="h-8 w-auto"
      height={32}
      width={32}
      src="/logo.png"
      alt="GroVr Logo"
      priority
    />
    <span className="text-secondary font-montserrat text-lg">GroVr</span>
  </Link>
);

const JoinOurTribeButtonJSX = (
  <Link
    href="/tribe"
    className="border-primary text-primary group relative inline-flex items-center justify-center overflow-hidden rounded-full border-2 px-4 py-2 font-medium shadow-md transition duration-300 ease-out"
  >
    <span className="ease bg-primary absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center text-white duration-300 group-hover:translate-x-0">
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    </span>
    <span className="ease text-primary absolute flex h-full w-full transform items-center justify-center transition-all duration-300 group-hover:translate-x-full">
      Join our Tribe
    </span>
    <span className="invisible relative">Join our Tribe</span>
  </Link>
);

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const path = usePathname();

  let pathName = path;

  if (pathName.includes("/blog")) {
    pathName = "/blog";
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        path === "/" ? "bg-white" : "bg-white/75 backdrop-blur-lg"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">{LogoJSX}</div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
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
              scroll={item.scroll}
              className="relative flex gap-2 text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
              {item.tagJSX}
              {pathName === item.href ? (
                <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                  <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                    <motion.path
                      d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                      stroke="#7043EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{
                        strokeDasharray: 84.20591735839844,
                        strokeDashoffset: 84.20591735839844,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 1,
                      }}
                    />
                  </svg>
                </motion.div>
              ) : null}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          {/* {user.isSignedIn ? (
            <Link
              href="/dashboard"
              className="relative text-sm font-semibold leading-6 text-gray-900"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/sign-up"
              className="relative text-sm font-semibold leading-6 text-gray-900"
            >
              Sign up
              {router.asPath.includes("/sign-up") ? (
                <motion.div className="absolute -bottom-[1px] left-0 right-0 h-[1px]">
                  <svg width="37" height="8" viewBox="0 0 37 8" fill="none">
                    <motion.path
                      d="M1 5.39971C7.48565 -1.08593 6.44837 -0.12827 8.33643 6.47992C8.34809 6.52075 11.6019 2.72875 12.3422 2.33912C13.8991 1.5197 16.6594 2.96924 18.3734 2.96924C21.665 2.96924 23.1972 1.69759 26.745 2.78921C29.7551 3.71539 32.6954 3.7794 35.8368 3.7794"
                      stroke="#7043EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={{
                        strokeDasharray: 84.20591735839844,
                        strokeDashoffset: 84.20591735839844,
                      }}
                      animate={{
                        strokeDashoffset: 0,
                      }}
                      transition={{
                        duration: 1,
                      }}
                    />
                  </svg>
                </motion.div>
              ) : null}
            </Link>
          )} */}
          {JoinOurTribeButtonJSX}
        </div>
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
            {LogoJSX}
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
              <div className="flex flex-col space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    scroll={item.scroll}
                    className="-mx-3 flex gap-2 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name} {item.tagJSX}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-4 py-6">
                {/* {user.isSignedIn ? (
                  <Link
                    href="/dashboard"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Dashboard
                  </Link>
                ) : (
                  <Link
                    href="/sign-up"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Sign up
                  </Link>
                )} */}
                {JoinOurTribeButtonJSX}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Navbar;
