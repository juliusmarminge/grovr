"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export default function Counter({
  value,
  direction = "up",
  autorun = false,
}: {
  value: number;
  direction?: "up" | "down";
  autorun?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView || autorun) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView, autorun]);

  useEffect(() => {
    springValue.on("change", (latest: number) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.round(latest),
        );
      }
    });
  }, [springValue]);

  return <span ref={ref} />;
}
