"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturesBentoGrid() {
  return (
    <div className="flex flex-col items-center justify-around w-full space-y-12 my-12 ">
        <div className=" text-white font-bold text-7xl">
            FEATURES
        </div>

    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
          <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
        ))}
    </BentoGrid>
        </div>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black">
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
      </motion.div>
    </motion.div>)
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
          }}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-neutral-100 dark:bg-black w-full h-4"></motion.div>
      ))}
    </motion.div>)
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>)
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  return (
    (<motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2">
      <motion.div
        variants={first}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAb1BMVEXiN0TiOEX////iLz7hLDvhJjbwpqriNELiMkDhKDjhIzTgHS/87O3pdn3++fngGi3zuLvxrbH30NLfCCPlUFrqgYfjRE/kSlXmXGXrh4353+HskJXgEij0wsX41tjfABntl5zob3fnZGzeABDunqL6s4FMAAABmUlEQVRIie2X3ZKkIAyF4QAiqKB0+9N2Y6sz7/+ME9Sp2d279WJv1pQCFc4XEqQsZZngJ0xkTLBTJhg/B/ILvMAL/L9AnZ8Di275hfwTzPc5fcRPtxZS5tROyExyCf0DamGModm8uA9SMqk4t/0ghVy1NqKa57sRC9DSy02tVae+QTnDkeG9lqBpnwF9DTwHh/L1iWRttXWvxVGb2QNUcfOO3dZBE0QXNq98uGYuMT43Rb8r1nwH86VqQcEnQMzAg4jxQfNVCWdtce8blB8TnP9WNOaoUUqScAuEF0V4jgAnsPlwGN/1tkZIY6+SgpKu1Q5qlTjPyXOjkpakb4AhOT4x9XZE7Sl13x2KpzxqpCVCHe+UbkchDGluAWADpT2hfa/ATNXF5VBA7ptjmr1ks+/RQrrsRgFulO4a4SbayXbblm7Puz1AOYcQYwiFqp2bVluFUJkYav8IgfNQxmGa1iK6sjFJMS4/z9FuRjkXqsiZsFYwZVUaaG29yq3NmS08HRxlTSH+9pD/Zhd4gRd4gf8WPP0xf/b34Qv3YxiTAy8eIgAAAABJRU5ErkJggg=="
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Verify using food orders.
        </p>
        <p
          className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Physical
        </p>
      </motion.div>
      <motion.div
        className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAASFBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAACgoKBSUlIfHx+3t7dERESqqqrT09Nvb28tLS3r6+vl5eWRkZHDw8NgYGD5+fl5eXl0fajXAAAACHRSTlMAMaTd8/+Z3E+2Nl8AAACoSURBVHgBpZNFAsMgFAVJyktwl/uftO4t0cGZ3RdypusPFB/QQ9+RKwP+MjTc03Zo0pEeTXoyoslIKJpQggn2ScYBIZX+K40FnOehLYMK0aQMMJM4JGOfsmhlg2LS5SDO908ZADAdJGPeeoG7TBFQRXkAmoWYcxYvmUu1pqiScgwumlwlylMip2SjizVJBZx3DvaULXbIyZRNJ3uyTCYLbLI0p4p6sh1OWZ0Tavh/KrAAAAAASUVORK5CYII="
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
          Uber Rides
        </p>
        <p
          className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
          verifiable
        </p>
      </motion.div>
      <motion.div
        variants={second}
        className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
        <Image
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAATlBMVEVHcEz///////////////////////////////////////////8AUP8AUv9/o/8ASf+ivf8SWf9Id//j7P/Ez//b5v/P3P8iZ/9giv9kjP8SuYe/AAAAC3RSTlMAXAqIUrUV4jzFiQJjO6oAAAENSURBVCiRfZPbloMgDEVRq0CTEC7e+v8/2oBa7Dj1vOhik5AcglK7WtNZDaBtZ1r1raGx8JFuhjMzvayleRTNSX57U9lD8k1+XYgZl9VPEvw4Mx+JEYkQmaKv1AhzgYXs4uCElsyDnOdwQ5+P0D5X1UjOgBsJYeMYJHMj/WmYY1mg6Lx3sWzkOIFtlZHAUklwuQlILlMkCTXqCWnlwg4PnCDiNUGnLMxL3hrTAVNk0TKDVRrGUoOr9nmXNYFWACPv5V10DyUt/Ux7W9Deyim0NMqv3Eo2gX6Z0FqYIhc/N/tKBSj26fbe+Psru1w2ni77GBP8d0zqgCEz/R2w+9HMQ62rffZ7qMtzeF6ewxtTQiBf4+Y/uwAAAABJRU5ErkJggg=="
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p
          className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
         Coinbase KYC Account
        </p>
        <p
          className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
          Secure
        </p>
      </motion.div>
    </motion.div>)
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    (<motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-neutral-100 dark:border-white/[0.2] p-2  items-start space-x-2 bg-white dark:bg-black">
        <Image
          src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
          alt="avatar"
          height="100"
          width="100"
          className="rounded-full h-10 w-10" />
        <p className="text-xs text-neutral-500">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center justify-end space-x-2 w-3/4 ml-auto bg-white dark:bg-black">
        <p className="text-xs text-neutral-500">Use PHP.</p>
        <div
          className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
      </motion.div>
    </motion.div>)
  );
};
const items = [
  {
    title: "Verify Your Identity",
    description: (
      <span className="text-sm">
       Mint stamps from trusted sources like banks, rideshares, or e-commerce platforms.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Decentralized & Secure",
    description: (
      <span className="text-sm">
       Your credentials are securely stored on Solana, no PII needed.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "One Credential, One User",
    description: (
      <span className="text-sm">
        Prevent duplicate stamps with our secure system backed by unique identifiers.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Integrate with dApps",
    description: (
      <span className="text-sm">
        Easily use your passport in dApps, showcasing your identity across the decentralized web.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-2",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Build Your Reputation",
    description: (
      <span className="text-sm">
 Accumulate stamps and earn a score that reflects your personhood, making you a trusted participant in the digital economy.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
