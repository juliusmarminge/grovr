"use client";
import { type PropsWithChildren } from "react";
import { motion } from "framer-motion";

import Footer from "~/components/Footer";
import Navbar from "~/components/Navbar";

const Layout: React.FC<PropsWithChildren> = (props) => {
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

export default Layout;
