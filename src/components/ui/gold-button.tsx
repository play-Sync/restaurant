// src/components/restaurant/ui/gold-button.tsx

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GoldButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "default" | "large" | "small";
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function GoldButton({
  children,
  variant = "solid",
  size = "default",
  className = "",
  href,
  onClick,
  disabled = false,
}: GoldButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-sans tracking-elegant text-sm uppercase transition-all duration-500 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    solid:
      "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary",
    outline:
      "bg-transparent text-primary border border-primary/60 hover:border-primary hover:bg-primary hover:text-primary-foreground",
    ghost:
      "bg-transparent text-primary hover:text-primary/80 border-b border-primary/40 hover:border-primary rounded-none",
  };

  const sizeStyles = {
    small: "px-5 py-2.5 text-xs",
    default: "px-8 py-3.5",
    large: "px-10 py-4 text-base",
  };

  const Component = href ? motion.a : motion.button;
  const componentProps = href
    ? {
        href,
        target: href.startsWith("http")
          ? "_blank"
          : undefined,
        rel: href.startsWith("http")
          ? "noopener noreferrer"
          : undefined,
      }
    : { onClick, disabled };

  return (
    <Component
      {...componentProps}
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      whileHover={
        disabled
          ? {}
          : { scale: variant === "ghost" ? 1 : 1.03 }
      }
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {variant !== "ghost" && (
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-linear-to-r from-transparent via-white/20 to-transparent" />
      )}
      <span className="relative z-10">{children}</span>
    </Component>
  );
}
