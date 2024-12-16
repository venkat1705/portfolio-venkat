"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";

export const CardSpotlight = ({
  children,
  radius = 350,
  color = "#ffffff",
  className,
  ...props
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const [, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  return (
    <div
      className={cn(
        "group/spotlight relative ring-1 ring-inset ring-foreground/20 rounded-2xl bg-opacity-50 backdrop-blur-3xl ",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px lg:rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
  radial-gradient(
    ${radius}px circle at ${mouseX}px ${mouseY}px,
    rgba(255, 255, 255, 0.2),
    transparent 80%
  )
`,
        }}
      ></motion.div>
      {children}
    </div>
  );
};
