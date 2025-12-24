import { cn } from "@/lib/utils";
import type React from "react";

type SectionProps = React.ComponentPropsWithoutRef<"section">;

export const Section = ({ className, ...props }: SectionProps) => {
  return (
    <section
      {...props}
      className={cn("max-w-6xl px-4 m-auto", className)}
    />
  );
};
