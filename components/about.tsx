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
        I am currently in my fourth year, pursuing Btech in{" "}
        <span className="font-medium">Computer Science</span>, I decided to pursue my
        passion for programming from second year only. I did a lot of <span className="font-medium">Competitive programming</span> and <span className="font-medium">DSA</span> in <span className="font-medium">Codechef and Leetcode respectively, solving over 250 problems in all.</span> I joined my first company, Brand Impetus as a{" "}
        <span className="font-medium">software developer</span>.{" "}
        <span className="italic">My favorite part of developing</span> is creating product that actual masses are gonna use. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript, Javascript and TailwindCSS along with SCSS. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching movies, and spending time with friends and family. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Frontend Microservices</span>
      </p>
    </motion.section>
  );
}
