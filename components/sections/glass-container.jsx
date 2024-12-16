import { cn } from "@/lib/utils";
import * as React from "react";
const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        `h-12 w-12 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
