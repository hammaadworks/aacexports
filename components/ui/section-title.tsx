import React from "react";
import { cn } from "@/lib/utils";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

export function SectionTitle({ title, subtitle, align = "center", className, ...props }: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      {...props}
    >
      <h2 className="text-3xl font-serif font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  );
}
