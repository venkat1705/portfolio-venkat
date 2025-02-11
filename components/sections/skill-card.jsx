"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { BorderBeam } from "./border-beam";

export default function SkillCard() {
  const [activeStep, setActiveStep] = useState(0);
  const [, setProgress] = useState(0);

  const skills = [
    {
      name: "Reactjs",
      image: "/react.svg",
    },
    {
      name: "Nodejs",
      image: "/nodejs.svg",
    },
    {
      name: "MongoDB",
      image: "/mongodb-1.svg",
    },
    {
      name: "Nextjs",
      image: "/nextjs.webp",
    },
    {
      name: "Javascript",
      image: "/javascript.svg",
    },
    {
      name: "Tailwind CSS",
      image: "/tailwindcss.svg",
    },
    {
      name: "HTML5",
      image: "/html.svg",
    },

    {
      name: "Prisma ORM",
      image: "/prisma.svg",
    },
    {
      name: "PostgreSQL",
      image: "/postgresql.svg",
    },
    {
      name: "CSS3",
      image: "/css.svg",
    },
    {
      name: "GraphQl",
      image: "/graphql.svg",
    },
    {
      name: "Typescript",
      image: "/typescript.svg",
    },
    {
      name: "Supabase",
      image: "/supabase.svg",
    },
    {
      name: "Google Cloud",
      image: "/gcp.svg",
    },
    {
      name: "Expressjs",
      image: "/express.svg",
    },
    {
      name: "Git",
      image: "/git.svg",
    },
    {
      name: "Github",
      image: "/github.svg",
    },
    {
      name: "AWS",
      image: "/aws.svg",
    },
    {
      name: "Socket IO",
      image: "/socket-io.svg",
    },
    {
      name: "Docker",
      image: "/docker.svg",
    },
    {
      name: "Solidity",
      image: "/solidity.svg",
    },
    {
      name: "IPFS",
      image: "/ipfs.svg",
    },
    {
      name: "Chainlink",
      image: "/chainlink.svg",
    },
    {
      name: "Polygon",
      image: "/polygon.svg",
    },
    {
      name: "Hyperledger Fabric",
      image: "/hyperledger.svg",
    },
    {
      name: "Hardhat",
      image: "/hardhat.svg",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-12">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10"
      >
        {skills.map((step, index) => (
          <div
            className="relative inline-flex h-[120px] overflow-hidden rounded-2xl p-0.5 focus:outline-none select-none group"
            key={index}
          >
            <span className="hidden group-hover:block absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ffaa40_0%,#ffaa40_50%,#9c40ff_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center flex-col gap-2 rounded-2xl bg-accent px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              <Image
                src={step?.image}
                width={60}
                height={60}
                alt={step.name}
                className="grayscale group-hover:grayscale-0 transition duration-300"
              />
              <p>{step?.name}</p>
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
