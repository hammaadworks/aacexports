import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  children: React.ReactNode;
}

export function PageHeaderBadge({ icon: Icon, children, className, ...props }: Readonly<PageHeaderBadgeProps>) {
  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full border border-primary/30 bg-secondary px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-primary/10 transition-all hover:scale-105 hover:shadow-primary/20 mb-8",
        className
      )}
      {...props}
    >
      <div className="relative mr-2 flex items-center justify-center">
        <div className="absolute h-full w-full animate-ping rounded-full bg-primary opacity-20 duration-1000" />
        <div className="relative rounded-full bg-primary/20 p-1">
          <Icon className="h-3.5 w-3.5 text-primary" />
        </div>
      </div>
      <span className="text-sm font-medium tracking-wide">{children}</span>
    </div>
  );
}
