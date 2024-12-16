"use client";

import AnimationContainer from "@/lib/globals/animted-container";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Upload, Zap } from "lucide-react";
import * as React from "react";
import { useEffect, useState } from "react";
import { ArrowedTooltip } from "../arrwed-tooltip";
import Container from "./glass-container";
import Image from "next/image";

export default function ProjectSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      icon: Upload,
      title: "Rekrafted",
      description:
        "Rekrafted is a platform dedicated to selling high-quality refurbished mobile phones. We provide a wide selection of smartphones that have been carefully inspected, restored, and tested to ensure they meet high standards of performance and quality",
      image: "/RekrafteD.png",
      techStack: [
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
          name: "Razorpay",
          image: "/razorpay.jpeg",
        },
        {
          name: "Stripe",
          image: "/stripe.svg",
        },
      ],
    },
    {
      icon: Zap,
      title: "Dylect",
      description:
        "Dylect is a platform dedicated to providing high-quality automobile parts and accessories, specializing in products such as pressure washers and solar lights. We offer a wide range of durable and efficient items designed to enhance the performance and convenience of vehicles.",
      image: "Dylect.png",
      techStack: [
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
          name: "Razorpay",
          image: "/razorpay.jpeg",
        },
        {
          name: "Stripe",
          image: "/stripe.svg",
        },
      ],
    },
    {
      icon: Sparkles,
      title: "SEO Insights",
      description:
        "SEO Insights is a comprehensive website analytics platform designed to help users track and analyze the performance of their URLs. With this tool, you can easily monitor key metrics such as clicks, impressions, and the keywords associated with each URL.",
      image: "/seo.png",
      techStack: [
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
          name: "Paypal",
          image: "/paypal.svg",
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
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative flex gap-6 ${
                activeStep === index ? "opacity-100" : "opacity-60"
              }`}
            >
              {/* Vertical bar */}
              <div className={`absolute left-0 top-0 h-full w-0.5 bg-gray-300`}>
                {activeStep === index && (
                  <motion.div
                    className="absolute top-0 left-0 w-full bg-blue-600"
                    initial={{ height: 0 }}
                    animate={{ height: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>

              <div className="space-y-2 flex-grow pl-4">
                {" "}
                {/* Add padding to avoid overlap */}
                <div>
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="leading-relaxed text-muted-foreground text-sm antialiased tracking-wide">
                    {step.description}
                  </p>

                  <div className="mt-3 flex items-center gap-3">
                    {step?.techStack?.map((item, index) => (
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
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {steps?.map((item, index) => {
                if (activeStep === index) {
                  return (
                    <React.Fragment key={index}>
                      <div className="relative  rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl h-full">
                        <img
                          src="https://startup-template-sage.vercel.app/hero-dark.png"
                          alt={item.title}
                          className="w-full h-auto object-fill rounded-md"
                        />
                      </div>
                    </React.Fragment>
                  );
                }
              })}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
