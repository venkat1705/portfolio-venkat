"use client";

import { motion } from "framer-motion";
import {
  BotMessageSquare,
  ChartSpline,
  CodeIcon,
  CodeXmlIcon,
  FolderCode,
  FramerIcon,
  Lightbulb,
  LinkIcon,
  WatchIcon,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CardSpotlight } from "../card-spotlight";
import Container from "./glass-container";
import { ArrowedTooltip } from "../arrwed-tooltip";
import Image from "next/image";

export default function ServiceCard() {
  const [activeStep, setActiveStep] = useState(0);
  const [, setProgress] = useState(0);

  const steps = [
    {
      icon: CodeXmlIcon,
      title: "Website Development",
      description:
        "I create visually appealing, user-centric websites that help establish your online presence. Whether it's a simple website or a sophisticated e-commerce platform, I offer customized solutions utilizing the latest frameworks and technologies to ensure a smooth, responsive, and SEO-optimized browsing experience. Elevate your online identity with high-quality web design.",
      skills: [
        {
          name: "Reactjs",
          image: "/react.svg",
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
          name: "HTML5",
          image: "/html.svg",
        },
        {
          name: "CSS3",
          image: "/css.svg",
        },
        {
          name: "Tailwind CSS",
          image: "/tailwindcss.svg",
        },
        {
          name: "Typescript",
          image: "/typescript.svg",
        },
      ],
    },
    {
      icon: CodeIcon,
      title: "Backend Development",
      description:
        "I strengthen digital applications with reliable, scalable backend infrastructures. I design efficient database structures, build robust APIs, and configure servers to optimize performance, security, and scalability. This ensures your applications can effortlessly manage high traffic and complex data. Trust in powerful backend solutions.",
      skills: [
        {
          name: "Nodejs",
          image: "/nodejs.svg",
        },
        {
          name: "MongoDB",
          image: "/mongodb-1.svg",
        },
        {
          name: "GraphQl",
          image: "/graphql.svg",
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
          name: "Supabase",
          image: "/supabase.svg",
        },
        {
          name: "Expressjs",
          image: "/express.svg",
        },
        {
          name: "Socket IO",
          image: "/socket-io.svg",
        },
      ],
    },
    {
      icon: Wrench,
      title: "Cloud Technologies",
      description:
        " leverage cloud technologies to build flexible, scalable, and cost-effective solutions for your business. By utilizing cloud platforms, I optimize infrastructure, enhance data storage, and streamline application deployment, ensuring high availability, security, and performance. With cloud-based solutions, your business can scale effortlessly and stay ahead in the digital landscape.",
      skills: [
        {
          name: "AWS",
          image: "/aws.svg",
        },

        {
          name: "Google Cloud",
          image: "/gcp.svg",
        },
      ],
    },
    {
      icon: FolderCode,
      title: "Software tools",
      description:
        "I utilize cutting-edge software tools to enhance your development process and optimize workflows. By integrating tools like Git for version control, GitHub for seamless collaboration, and Docker for containerization, I ensure efficient code management, smooth team collaboration, and reliable deployment. These tools enable high performance, scalability, and security.",
      skills: [
        {
          name: "Docker",
          image: "/docker.svg",
        },
        {
          name: "Git",
          image: "/git.svg",
        },
        {
          name: "Github",
          image: "/github.svg",
        },
      ],
    },
    {
      icon: FramerIcon,
      title: "Animation Tools",
      description:
        "I leverage powerful animation tools to bring your digital experiences to life with smooth, interactive, and engaging animations. By integrating tools like Framer Motion for seamless UI animations and Three.js for creating immersive 3D environments, I ensure dynamic, responsive, and visually captivating results. These tools empower creativity and optimize performance.",
      skills: [
        {
          name: "Framer Motion",
          image: "/framer.svg",
        },
        {
          name: "Threejs",
          image: "/Threejs.svg",
        },
      ],
    },
    {
      icon: LinkIcon,
      title: "Web3 Technologies",
      description:
        "I specialize in building decentralized and enterprise-grade blockchain solutions using cutting-edge Web3 technologies. By integrating Hyperledger for enterprise blockchain applications, Oracle Blockchain for secure and scalable solutions, and Chainlink for reliable smart contract oracles, I ensure robust, transparent, and efficient decentralized systems. From smart contracts to decentralized identity management, my expertise covers a wide range of blockchain use cases.",
      skills: [
        {
          name: "Hyperledger Fabric",
          image: "/hyperledger.svg",
        },
        {
          name: "Chainlink",
          image: "/chainlink.svg",
        },

        {
          name: "IPFS",
          image: "/ipfs.svg",
        },
        {
          name: "Solidity",
          image: "/solidity.svg",
        },
        {
          name: "POlygon Chain",
          image: "/polygon.svg",
        },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % steps.length);
      setProgress(0);
    }, 5000);

    return () => clearInterval(interval);
  }, [steps.length]);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
    }, 50);

    return () => clearInterval(progressInterval);
  }, [activeStep]);

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
    <div className=" py-12 ">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6"
      >
        {steps.map((step, index) => (
          <CardSpotlight key={index}>
            <motion.div key={index} variants={itemVariants} className="p-4">
              <div className="relative inline-flex h-14 w-14 overflow-hidden rounded-full p-[1.5px] focus:outline-none select-none">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#1D4ED8_0%,#1D4ED8_50%,#007AFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                  <step.icon className="w-8 h-8 text-primary" />
                </span>
              </div>
              <div className="flex flex-col space-y-2 mt-3">
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed antialiased tracking-wide">
                  {step.description}
                </p>

                <div className="py-6 flex items-center flex-wrap gap-3">
                  {step?.skills?.map((item, index) => (
                    <Container key={index} className="cursor-pointer">
                      <ArrowedTooltip
                        trigger={
                          <Image
                            src={item.image}
                            width={30}
                            height={30}
                            alt={item.name}
                            className="cursor-pointer"
                          />
                        }
                        content={
                          <div className="text-left">
                            <p className="font-medium capitalize">
                              {item?.name}
                            </p>
                          </div>
                        }
                        side="top"
                      />
                    </Container>
                  ))}
                </div>
              </div>
            </motion.div>
          </CardSpotlight>
        ))}
      </motion.div>
    </div>
  );
}
