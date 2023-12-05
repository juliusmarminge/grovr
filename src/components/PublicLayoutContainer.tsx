"use client";
import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

import Footer from "./Footer";
import Navbar from "./Navbar";

const PublicLayoutContainer: React.FC<PropsWithChildren> = (
  props,
): JSX.Element => {
  return (
    <>
      <Navbar />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {props.children}
      </motion.div>
      <Footer />
    </>
  );
};

export default PublicLayoutContainer;
