import { cn } from "@/lib/utils"
import { ComponentPropsWithoutRef } from "react"

export const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/10 font-mono text-accent text-sm border border-accent/30",
        "hover:bg-accent/20 hover:border-accent/60",
        "transition-colors px-1.5 py-0.5 rounded-md",
        className
      )}
      {...props}
    />
  )
}