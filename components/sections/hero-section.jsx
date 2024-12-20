import AnimationContainer from "@/lib/globals/animted-container";
import React from "react";
import AnimatedButton from "../animated-button";
import { TypewriterEffect } from "./hero-writer";

const HeroSection = () => {
  return (
    <AnimationContainer className="flex flex-col items-center justify-center w-full text-center py-10">
      <h1 className="text-foreground text-center py-6 text-4xl font-medium tracking-normal text-balance sm:text-4xl md:text-7xl lg:text-8xl !leading-[1.15] w-full font-heading">
        Hello there, I am
        <br />
        <p className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text inline-block h-full text-4xl lg:text-8xl mt-4 lg:mt-0">
          Venkat M
        </p>
      </h1>
      <p className="mb-12  tracking-wide text-muted-foreground lg:text-center md:text-xl text-balance">
        creative thinker and passionate about turning challenges into
        opportunities,
        <span className="">
          With expertise in{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text inline-block">
            FullStack Development
          </span>
          , thrive on innovation.
        </span>
      </p>
      <div className="flex items-center justify-center whitespace-nowrap gap-4 z-50">
        <AnimatedButton
          name="Let's start a conversation"
          href="https://api.whatsapp.com/send?phone=919347653480"
        />
      </div>
    </AnimationContainer>
  );
};

export default HeroSection;
