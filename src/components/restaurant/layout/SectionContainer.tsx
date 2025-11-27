// src/components/restaurant/layout/section-container.tsx

import { type ReactNode, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "darker" | "gradient";
  size?: "default" | "large" | "small" | "hero";
  containerWidth?: "default" | "narrow" | "wide" | "full";
  grain?: boolean;
}

export const SectionContainer = forwardRef<
  HTMLElement,
  SectionContainerProps
>(
  (
    {
      children,
      className = "",
      id = "",
      variant = "default",
      size = "default",
      containerWidth = "default",
      grain = false,
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-background",
      dark: "bg-card",
      darker: "bg-secondary",
      gradient:
        "bg-gradient-to-b from-background via-card/50 to-background",
    };

    const sizeStyles = {
      default: "py-24 md:py-32",
      large: "py-32 md:py-44",
      small: "py-16 md:py-24",
      hero: "min-h-screen",
    };

    const containerStyles = {
      default: "max-w-6xl",
      narrow: "max-w-4xl",
      wide: "max-w-7xl",
      full: "max-w-full px-0",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(
          "relative px-6 md:px-12 overflow-hidden",
          variantStyles[variant],
          sizeStyles[size],
          grain && "grain-overlay",
          className
        )}
      >
        <div
          className={cn(
            "mx-auto relative z-10",
            containerStyles[containerWidth]
          )}
        >
          {children}
        </div>
      </section>
    );
  }
);

SectionContainer.displayName = "SectionContainer";
