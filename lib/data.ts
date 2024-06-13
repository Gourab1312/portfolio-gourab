import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import eventlyImg from "@/public/evently.png";
import promptopiaImg from "@/public/promptopia.png";
import hooBankImg from "@/public/hoo_bank.png";
import vaultImg from "@/public/vaultImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Worked hard on DSA and Competitive programming",
    location: "Codechef and Leetcode",
    description: "At the end of six months, i became a 3* in Codechef.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Jan - June",
  },
  {
    title: "Bagged my first offer",
    location: "Tech Wishes",
    description:
      "I switched sides after my mid second year and got into development, studied hard and bagged my first offer letter on software developement",
    icon: React.createElement(CgWorkAlt),
    date: "2022 July - Dec",
  },
  {
    title: "Software Developer",
    location: "Brand Impetus",
    description:
      "I'm now a software developer in Brand Impetus and i have been workingg here for more than an year now. My stack includes React, Next.js, TypeScript, Tailwind, Nodejs and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 Jan - present",
  },
] as const;

export const projectsData = [
  {
    title: "Vault",
    description:
      "Vault is a next-gen banking app that links bank multiple accounts, displays real-time transactions, and supports user-to-user transfers",
    tags: [
      "Typescript",
      "Next.js14",
      "Tailwind",
      "Shadcn",
      "Zod",
      "Appwrite",
      "Plaid",
      "Dwolla",
    ],
    imageUrl: vaultImg,
  },
  {
    title: "Evently",
    description:
      "A dynamic CRUD event organization web app that lets users buy tickets and view orders details of an event they created.",
    tags: [
      "React",
      "Next.js14",
      "MongoDB",
      "Tailwind",
      "Shadcn",
      "Zod",
      "Clerk",
      "Stripe",
    ],
    imageUrl: eventlyImg,
  },
  {
    title: "Promptopia",
    description:
      "A Next.js 13 web app that helps users query ChatGPT and Bard AI using thoughtfully curated prompts, enhancing your interactions with LLMs.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MongoDB"],
    imageUrl: promptopiaImg,
  },
  {
    title: "Hoo Bank",
    description:
      "GenZ banking app built with React.js, Elegant UI is done with Tailwind CSS and custom gradients are the source of exceptional UX.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: hooBankImg,
  },
] as const;

export const skillsData = [
  "TypeScript",
  "NextJs",
  "JavaScript",
  "ReactJs",
  "Tailwind",
  "Zod",
  "Redux",
  "Zustand",
  "Formik",
  "HTML",
  "CSS",
  "Node.js",
  "Git & Github",
  "MongoDB",
  "Express",
  "Framer Motion",
  "GSAP"
] as const;
