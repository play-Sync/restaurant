// src/components/restaurant/ui/decorative-elements.tsx

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GoldDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={cn(
        "w-full h-px bg-linear-to-r from-transparent via-primary/40 to-transparent",
        className
      )}
    />
  );
}

export function Flourish({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "flex items-center justify-center gap-4",
        className
      )}
    >
      <div className="w-16 h-px bg-linear-to-r from-transparent to-primary/60" />
      <div className="w-2.5 h-2.5 rotate-45 border border-primary/70" />
      <div className="w-16 h-px bg-linear-to-l from-transparent to-primary/60" />
    </motion.div>
  );
}

export function DiamondSeparator({
  className = "",
}: {
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={cn(
        "flex items-center justify-center gap-3",
        className
      )}
    >
      <div className="w-20 h-px bg-linear-to-r from-transparent to-primary/30" />
      <div className="w-2 h-2 rotate-45 bg-primary/80" />
      <div className="w-20 h-px bg-linear-to-l from-transparent to-primary/30" />
    </motion.div>
  );
}

export function CornerOrnament({
  position = "top-left",
  className = "",
}: {
  position?:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
  className?: string;
}) {
  const positionStyles = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 rotate-90",
    "bottom-left": "bottom-0 left-0 -rotate-90",
    "bottom-right": "bottom-0 right-0 rotate-180",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={cn(
        "absolute w-12 h-12 md:w-16 md:h-16",
        positionStyles[position],
        className
      )}
    >
      <svg
        viewBox="0 0 64 64"
        className="w-full h-full text-primary/25"
      >
        <path
          d="M0 0 L64 0 L64 6 L6 6 L6 64 L0 64 Z"
          fill="currentColor"
        />
        <path
          d="M14 14 L14 22 L22 22"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </svg>
    </motion.div>
  );
}

export function SectionDivider({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={cn("relative py-8", className)}>
      <GoldDivider />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4">
        <div className="w-2 h-2 rotate-45 border border-primary/50" />
      </div>
    </div>
  );
}
