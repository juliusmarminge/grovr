"use client";

import React from "react";
import { Disclosure } from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";

const FAQ = (props: {
  faq: {
    question: string;
    answer: JSX.Element;
  };
  index: number;
  isInView: boolean;
  noAnimation?: boolean;
}) => {
  const { faq, index, isInView, noAnimation } = props;
  return (
    <Disclosure
      as={motion.div}
      key={faq.question}
      className="pt-6"
      initial={!noAnimation && { opacity: 0 }}
      animate={isInView && !noAnimation ? { opacity: 1 } : {}}
      transition={{
        duration: 0.3,
        delay: index * 0.2,
      }}
    >
      {({ open }) => (
        <>
          <dt>
            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
              <span className="text-base font-semibold leading-7">
                {faq.question}
              </span>
              <span className="ml-6 flex h-7 items-center">
                {open ? (
                  <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </dt>
          <AnimatePresence>
            {open && (
              <Disclosure.Panel
                static
                as={motion.dd}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.15, ease: "linear" }}
                className="mt-2 pr-12"
              >
                {faq.answer}
              </Disclosure.Panel>
            )}
          </AnimatePresence>
        </>
      )}
    </Disclosure>
  );
};

export default FAQ;
