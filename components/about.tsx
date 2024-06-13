"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a B.Tech graduate in{" "}
        <span className="font-medium">Computer Science</span>, passionate about
        programming since my second year. I've solved over 250 problems in{" "}
        <span className="font-medium">Competitive Programming</span> and{" "}
        <span className="font-medium">DSA</span> on Codechef and Leetcode. I
        worked as a <span className="font-medium">software developer</span> at
        Brand Impetus, where{" "}
        <span className="italic">I love creating products for real users</span>{" "}
        and <span className="underline">enjoy problem-solving. </span> My core
        stack is{" "}
        <span className="font-medium">
          Typescript,Next.js, Javascript, React, Node.js, and MongoDB
        </span>
        , and I'm skilled in Redux, Zustand, Zod, Formik, Version control, Framer Motion and GSAP. I'm
        eager to learn new technologies and currently seek a{" "}
        <span className="font-medium">
          full-time software developer position
        </span>
        .
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy movies,
        spending time with friends and family, and{" "}
        <span className="font-medium">learning new things</span>. I'm currently
        exploring <span className="font-medium">NextJs 15 and React 18</span>.
      </p>
    </motion.section>
  );
}
