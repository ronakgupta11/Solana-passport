"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { AuroraBackground } from "../ui/aurora-background";

export default function Hero() {
  return (
    (<AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4">
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Unlock the Power of Trust with <br/>Solana Passport
        </div>
        <div
          className="font-extralight text-base md:text-xl dark:text-neutral-200 py-4 text-center">
          Mint trusted stamps from diverse credential sources, verify personhood, and build a decentralized reputation.
        </div>
        <Link href="/dashboard">
        <button
          className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
          Get Now
        </button>
              </Link>
      </motion.div>
    </AuroraBackground>)
  );
}
