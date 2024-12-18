"use client";

import { FlipWords } from "../type-writer";

export function TypewriterEffect() {
  const words = ["Venkat M", "FullStack Dev", "Freelancer", "Web3 Enthusiast"];

  return (
    <div className=" flex justify-center items-center mx-auto w-full scrollbar-hide h-full">
      <FlipWords words={words} />
    </div>
  );
}
